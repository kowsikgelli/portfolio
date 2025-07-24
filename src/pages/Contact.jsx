import { Box, Typography, Container, Paper, Grid2 as Grid, Button, TextField, useTheme, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/kowsikgelli/',
    color: '#0077B5',
    description: 'Professional network',
  },
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
    url: 'https://github.com/kowsikgelli',
    color: '#333333',
    description: 'Code repositories',
  },
  {
    name: 'Email',
    icon: <EmailIcon />,
    url: 'mailto:kowsikgelliie@gmail.com',
    color: '#EA4335',
    description: 'Direct email',
  },
  {
    name: 'Website',
    icon: <PublicIcon />,
    url: 'https://kowsikgelli.com',
    color: '#6366F1',
    description: 'Portfolio website',
  },
];

function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend service
    const mailtoLink = `mailto:kowsikgelliie@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    
    setSnackbar({
      open: true,
      message: 'Opening your email client...',
      severity: 'success',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ mt: 4, mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            Let's Connect
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            I'm always excited to discuss new opportunities and ideas
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <MotionPaper
                elevation={0}
                variants={itemVariants}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  background: theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(30, 41, 59, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #6366F1 0%, #10B981 50%, #6366F1 100%)',
                    backgroundSize: '200% auto',
                    animation: 'gradient 3s ease infinite',
                  },
                  '@keyframes gradient': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ConnectWithoutContactIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Send Me a Message
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <MotionButton
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  fullWidth
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    mt: 3,
                    background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                    },
                  }}
                >
                  Send Message
                </MotionButton>
              </MotionPaper>
            </Grid>

            {/* Contact Info & Social Links */}
            <Grid size={{ xs: 12, md: 5 }}>
              {/* Quick Contact Info */}
              <MotionPaper
                elevation={0}
                variants={itemVariants}
                sx={{
                  p: 3,
                  mb: 3,
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)'
                    : 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Quick Contact
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      kowsikgelliie@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      (+353) 830169986
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: 'warning.main',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Dublin, Ireland
                    </Typography>
                  </Box>
                </Box>
              </MotionPaper>

              {/* Social Links */}
              <MotionPaper
                elevation={0}
                variants={itemVariants}
                sx={{
                  p: 3,
                  background: theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(30, 41, 59, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Connect on Social Media
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Find me on these platforms
                </Typography>

                <Grid container spacing={2}>
                  {socialLinks.map((social, index) => (
                    <Grid size={6} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          fullWidth
                          variant="outlined"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            py: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.5,
                            borderColor: theme.palette.divider,
                            '&:hover': {
                              borderColor: social.color,
                              backgroundColor: `${social.color}10`,
                              '& .social-icon': {
                                color: social.color,
                              },
                            },
                          }}
                        >
                          <Box
                            className="social-icon"
                            sx={{
                              color: theme.palette.text.secondary,
                              transition: 'color 0.3s ease',
                            }}
                          >
                            {social.icon}
                          </Box>
                          <Typography variant="caption" fontWeight={500}>
                            {social.name}
                          </Typography>
                        </Button>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </MotionPaper>

              {/* Availability Status */}
              <MotionBox
                variants={itemVariants}
                sx={{
                  mt: 3,
                  p: 3,
                  background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                  borderRadius: 3,
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0.5 },
                        '100%': { opacity: 1 },
                      },
                    }}
                  />
                  <Typography variant="h6" fontWeight={600}>
                    Available for Opportunities
                  </Typography>
                </Box>
                <Typography variant="body2">
                  Open to full-time positions and freelance projects
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;