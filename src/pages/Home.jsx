import { Box, Typography, Container, Paper, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profileImage from '../assets/profile-dummy.jpg';

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <MotionTypography
          variant="h2"
          component="h1"
          gutterBottom
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Krishnamurthy Kowsik Gelli
        </MotionTypography>

        <MotionBox
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            mb: 4
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Avatar
            src={profileImage}
            alt="Krishnamurthy Kowsik Gelli"
            sx={{
              width: 200,
              height: 200,
              border: 3,
              borderColor: 'primary.main'
            }}
          />
        </MotionBox>

        <MotionTypography
          variant="h5"
          color="text.secondary"
          paragraph
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-stack Developer & Cloud Solutions Architect
        </MotionTypography>

        <MotionBox
          component={Paper}
          elevation={3}
          sx={{ p: 3, mt: 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="body1" paragraph>
            Full-stack developer with expertise in cloud technologies, specializing in AWS and Azure.
            Skilled in building scalable, production-level web applications using React, Node.js, and
            Spring Boot, alongside architecting cloud solutions with serverless frameworks.
          </Typography>
          <Typography variant="body1">
            Experienced in client interactions, gathering project requirements, test-driven development (TDD),
            AI-driven development, CI/CD implementation, and performance optimization across diverse projects.
          </Typography>
        </MotionBox>

        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/kowsikgelli/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/kowsikgelli"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            href="mailto:kowsikgelliie@gmail.com"
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;