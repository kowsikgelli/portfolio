import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const MotionPaper = motion(Paper);

const education = [
  {
    degree: 'Masters in Cloud Computing',
    institution: 'National College Of Ireland',
    period: '22/01/2024 – Current',
    location: 'Dublin, Ireland',
    level: 'EQF level 7',
    website: 'https://www.ncirl.ie/'
  },
  {
    degree: 'Bachelors in Information Technology',
    institution: 'JNTUH University College of Engineering Jagtial',
    period: '01/06/2017 – 01/04/2021',
    location: 'Jagitial, India',
    level: 'EQF level 6',
    website: 'https://jntuhcej.ac.in/'
  }
];

function Education() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Education
        </Typography>

        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionPaper
                elevation={3}
                sx={{ p: 3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {edu.institution}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ ml: 7 }}>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {edu.period}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {edu.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {edu.level}
                  </Typography>
                  <Typography variant="body2">
                    <a href={edu.website} target="_blank" rel="noopener noreferrer">
                      Visit Institution Website
                    </a>
                  </Typography>
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Certification Section */}
        <MotionPaper
          elevation={3}
          sx={{ p: 3, mt: 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h5" component="h3" gutterBottom color="primary">
            Cloud Certifications
          </Typography>
          <Typography variant="h6" gutterBottom>
            AWS Certified Solutions Architect – Associate
          </Typography>
          <Typography variant="body1">
            View credential: <a href="https://www.credly.com/badges/93708c8a-3c4e-4628-a2c5-146aef76816c/public_url" target="_blank" rel="noopener noreferrer">
              Certification Badge
            </a>
          </Typography>
        </MotionPaper>
        <MotionPaper
          elevation={3}
          sx={{ p: 3, mt: 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h5" component="h3" gutterBottom color="primary">
            Blockchain Certifications
          </Typography>
          <Typography variant="h6" gutterBottom>
            Blockchain Developer Nanodegree - UDACITY
          </Typography>
          <Typography variant="body1">
            View credential: <a href="https://www.udacity.com/certificate/3J4EH5JR" target="_blank" rel="noopener noreferrer">
              Certification Badge
            </a>
          </Typography>
          <br />
          <Typography variant="h6" gutterBottom>
            Blockchain Architecture Design And Use Cases NPTEL - IIT Kharagpur and IBM
          </Typography>

        </MotionPaper>
      </Box>
    </Container>
  );
}

export default Education;