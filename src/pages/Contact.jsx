import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const MotionPaper = motion(Paper);

function Contact() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Contact Me
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MotionPaper
              elevation={3}
              sx={{ p: 3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" gutterBottom>
                Let's Connect!
              </Typography>
              <Typography variant="body1" paragraph>
                I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about technology.
              </Typography>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionPaper
              elevation={3}
              sx={{ p: 3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Email</Typography>
              </Box>
              <Button
                variant="contained"
                href="mailto:kowsikgelliie@gmail.com"
                fullWidth
              >
                kowsikgelliie@gmail.com
              </Button>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionPaper
              elevation={3}
              sx={{ p: 3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Phone</Typography>
              </Box>
              <Button
                variant="contained"
                href="tel:+353830169986"
                fullWidth
              >
                (+353) 830169986
              </Button>
            </MotionPaper>
          </Grid>

          <Grid item xs={12}>
            <MotionPaper
              elevation={3}
              sx={{ p: 3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom>
                Professional Networks
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/kowsikgelli/"
                  target="_blank"
                >
                  LinkedIn Profile
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/kowsikgelli"
                  target="_blank"
                >
                  GitHub Profile
                </Button>
              </Box>
            </MotionPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;