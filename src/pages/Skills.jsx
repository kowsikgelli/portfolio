import { Box, Typography, Container, Paper, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const skillCategories = {
  'Programming Languages': [
    'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'C++', 'C'
  ],
  'Frameworks & Libraries': [
    'React', 'Redux', 'Next.js', 'Angular', 'Spring Boot', 'Express.js', 'FastAPI',
    'Node.js', 'Vue.js'
  ],
  'Cloud & DevOps': [
    'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'EC2',
    'AWS CDK', 'CloudFormation', 'Azure Active Directory', 'Jenkins', 'CI/CD'
  ],
  'Databases': [
    'DynamoDB', 'MySQL', 'MongoDB', 'Redis', 'OpenSearch', 'RDS'
  ],
  'Tools & Others': [
    'Git', 'Docker', 'Kubernetes', 'Serverless Framework', 'RESTful APIs',
    'Microservices', 'Test-Driven Development', 'Agile/Scrum'
  ]
};

function Skills() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Technical Skills
        </Typography>

        <Grid container spacing={3}>
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Grid item xs={12} md={6} key={category}>
              <MotionPaper
                elevation={3}
                sx={{ p: 3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="h5" gutterBottom color="primary">
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      sx={{
                        m: 0.5,
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* AWS Certification Section */}
        <MotionPaper
          elevation={3}
          sx={{ p: 3, mt: 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typography variant="h5" gutterBottom color="primary">
            Certifications
          </Typography>
          <Typography variant="h6">
            AWS Certified Solutions Architect – Associate
          </Typography>
          <Box component="ul" sx={{ mt: 2 }}>
            <li>
              <Typography variant="body1">
                Demonstrated proficiency in designing cost-effective, scalable, and secure cloud architectures on AWS
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Skilled in leveraging core AWS services such as EC2, S3, RDS, and VPC
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Experienced in architecting hybrid architectures and implementing IAM
              </Typography>
            </li>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Verify: <a href="https://www.credly.com/badges/93708c8a-3c4e-4628-a2c5-146aef76816c/public_url" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </Typography>
        </MotionPaper>
      </Box>
    </Container>
  );
}

export default Skills;