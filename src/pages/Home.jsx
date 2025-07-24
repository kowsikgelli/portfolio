import { Box, Typography, Container, Paper, Button, Avatar, Grid2 as Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import profileImage from '../assets/picture.jpeg';

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function Home() {
  const highlights = [
    { icon: <CodeIcon fontSize="small" />, label: 'Full-Stack Developer' },
    { icon: <CloudIcon fontSize="small" />, label: 'Cloud Architect' },
    { icon: <WorkIcon fontSize="small" />, label: '3+ Years Experience' },
    { icon: <LocationOnIcon fontSize="small" />, label: 'Dublin, Ireland' },
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ mt: 4, mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <MotionTypography
                variant="h1"
                component="h1"
                gutterBottom
                variants={itemVariants}
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Hi, I'm Kowsik Gelli
              </MotionTypography>

              <MotionTypography
                variant="h4"
                color="text.secondary"
                paragraph
                variants={itemVariants}
                sx={{ fontWeight: 500, mb: 3 }}
              >
                Full-Stack Developer & Cloud Solutions Architect
              </MotionTypography>

              <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
                <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I build scalable web applications and architect cloud solutions that drive business growth.
                  Specializing in modern JavaScript frameworks, serverless architectures, and DevOps practices.
                </Typography>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}
              >
                {highlights.map((item, index) => (
                  <Chip
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderWidth: 2,
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        '& .MuiChip-icon': {
                          color: 'primary.contrastText',
                        },
                      },
                    }}
                  />
                ))}
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
              >
                <MotionButton
                  variant="contained"
                  size="large"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/kowsikgelli/"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                    },
                  }}
                >
                  LinkedIn
                </MotionButton>
                <MotionButton
                  variant="outlined"
                  size="large"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/kowsikgelli"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </MotionButton>
                <MotionButton
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  href="mailto:kowsikgelliie@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </MotionButton>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox
                variants={imageVariants}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #6366F1 0%, #10B981 100%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    opacity: 0.3,
                    transform: 'scale(1.1)',
                  }}
                />
                <Avatar
                  src={profileImage}
                  alt="Krishnamurthy Kowsik Gelli"
                  sx={{
                    width: { xs: 250, sm: 300, md: 350 },
                    height: { xs: 250, sm: 300, md: 350 },
                    border: '4px solid',
                    borderColor: 'background.paper',
                    boxShadow: 4,
                    position: 'relative',
                    zIndex: 1,
                  }}
                  imgProps={{
                    style: {
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    },
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>

          <MotionPaper
            elevation={0}
            variants={itemVariants}
            sx={{
              p: 4,
              mt: 6,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)'
                  : 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
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
            <Typography variant="h5" gutterBottom fontWeight={600}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 2 }}>
              I'm a passionate full-stack developer with over 3 years of experience building scalable web applications
              and cloud solutions. My expertise spans across modern JavaScript frameworks, cloud platforms (AWS & Azure),
              and DevOps practices.
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 2 }}>
              I specialize in creating production-level applications using React, Node.js, and Spring Boot, while
              architecting serverless solutions that optimize performance and reduce costs. My experience includes
              direct client interactions, requirement gathering, and implementing test-driven development practices.
            </Typography>
            <Typography variant="body1">
              I'm driven by the challenge of solving complex problems and creating elegant solutions that make a
              real impact. Whether it's optimizing application performance, implementing CI/CD pipelines, or
              leveraging AI for development efficiency, I'm always eager to learn and apply cutting-edge technologies.
            </Typography>
          </MotionPaper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Home;