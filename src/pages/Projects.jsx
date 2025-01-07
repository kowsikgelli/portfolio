import { Box, Typography, Container, Paper, Grid, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const MotionPaper = motion(Paper);

const projects = [
  {
    title: 'AWS Agent',
    description: 'An AI-powered CLI tool that allows users to manage AWS resources using natural language. Built with phidata and custom AWS service tools.',
    techStack: ['Python', 'AWS SDK', 'OpenAI', 'Claude', 'phidata'],
    features: [
      'Natural language processing for AWS commands',
      'Support for S3, EC2, and other AWS services',
      'Integration with multiple AI models',
      'Custom AWS service tools',
      'Secure credential management'
    ],
    github: 'https://github.com/kowsikgelli/aws_agent',
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    category: 'Cloud & AI'
  },
  // Add more projects here as needed
];

function Projects() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Personal Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <MotionPaper
                elevation={3}
                sx={{ p: 4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                      {project.icon}
                      <Typography variant="h4" component="h3" sx={{ color: 'primary.main' }}>
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                        Key Features:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {project.features.map((feature, i) => (
                          <Box
                            component="li"
                            key={i}
                            sx={{
                              typography: 'body1',
                              color: 'text.secondary',
                              mb: 1,
                            }}
                          >
                            {feature}
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                      {project.techStack.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          variant="outlined"
                          color="primary"
                          size="small"
                          icon={<CodeIcon />}
                          sx={{ 
                            borderWidth: 1.5,
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          border: '2px solid',
                          borderColor: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      {project.demo && (
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'primary.main',
                            border: '2px solid',
                            borderColor: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                            },
                          }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        backgroundColor: 'primary.main',
                        borderRadius: 2,
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                      }}
                    >
                      <AutoAwesomeIcon sx={{ fontSize: 60, mb: 2 }} />
                      <Typography variant="h6" align="center" gutterBottom>
                        {project.category}
                      </Typography>
                      <Typography variant="body2" align="center">
                        Explore the code and documentation on GitHub
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;