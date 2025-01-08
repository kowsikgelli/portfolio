import { Box, Typography, Container, Paper, Chip, Divider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const MotionPaper = motion(Paper);

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'PRESIDIO',
    period: '01/07/2023 – 15/01/2024',
    location: 'Coimbatore, India',
    technologies: ['AWS', 'OpenAI', 'React', 'Next.js', 'Python', 'TypeScript'],
    achievements: [
      'Developed a chatbot integrated into AWS Chime meetings to answer user questions using live transcripts',
      'Enhanced chatbot intelligence by integrating OpenAI\'s GPT-3.5 with advanced prompt engineering techniques',
      'Developed a RAG (Retrieval-Augmented Generation) chatbot for the company website',
      'Built an analytics chatbot for Excel that generates graphical reports',
      'Created an advanced UI for chatbots using React and Next.js',
      'Collaborated with cross-functional teams to explore AI solutions'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'PRESIDIO',
    client: 'Met-Eireann (Irish Meteorological Service)',
    product: "https://opendata.met.ie/",
    period: '01/06/2022 – 01/07/2023',
    location: 'Coimbatore, India',
    technologies: ['React', 'Spring Boot', 'Redis', 'Kafka', 'Python', 'Celery', 'Redux'],
    achievements: [
      'Built a comprehensive weather data portal using ReactJS and Spring Boot',
      'Improved API performance by 40% with Redis caching',
      'Implemented rate limiting and circuit breakers in Spring Boot',
      'Enhanced data rendering with Redux',
      'Implemented asynchronous microservice communication using Apache Kafka',
      'Streamlined data processing using Celery tasks in Python',
      'Led Agile sprints, ensuring timely project delivery',
      'Increased code coverage to 90% with Mocha and Chai'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'PRESIDIO',
    client: '6CONNEX',
    period: '10/04/2022 – 10/08/2022',
    location: 'Remote',
    technologies: ['Vue.js', 'Backbone.js', 'Java Spring', 'JSP', 'Grunt.js'],
    achievements: [
      'Integrated modern Vue.js-based features into an existing Backbone.js and Java Spring application',
      'Enhanced legacy systems by understanding and modifying Backbone.js, Java Spring, and JSP code',
      'Implemented event-driven functionality for smooth transitions',
      'Customized and optimized Grunt.js tasks for build and deployment'
    ]
  },
  {
    title: 'Associate Software Engineer',
    company: 'PRESIDIO',
    period: '01/06/2021 – 01/07/2022',
    location: 'Coimbatore, India',
    technologies: ['AWS Lambda', 'TypeScript', 'Angular', 'DynamoDB', 'OpenSearch', 'CloudFormation'],
    achievements: [
      'Developed an employee profile management system using AWS Lambda and TypeScript',
      'Implemented SSO login using AWS Cognito with Azure Active Directory',
      'Built a dynamic UI with Angular for enhanced user experience',
      'Managed employee data with DynamoDB and optimized searches with OpenSearch',
      'Automated infrastructure deployment using AWS CloudFormation',
      'Set up a CI/CD pipeline for the entire project in AWS'
    ]
  }
];

function Experience() {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
      <Box sx={{ mt: 4, mb: 8, maxWidth: '100%' }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 4,
            textAlign: 'center'
          }}
        >
          Professional Experience
        </Typography>

        <Timeline
          sx={{
            p: 0,
            [`& .MuiTimelineContent-root`]: {
              flex: 4, // Gives more width to the content
              px: 2 // Reduces default padding
            },
            [`& .MuiTimelineSeparator-root`]: {
              flex: 0, // Minimizes the width of the separator
            },
            [`& .MuiTimelineItem-root`]: {
              minHeight: 'auto',
              '&:before': {
                flex: 0, // Removes the default spacing before timeline items
                padding: 0
              }
            }
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <MotionPaper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    mb: 3,
                    borderLeft: 4,
                    borderColor: 'primary.main',
                    width: '100%',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s'
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%' }}>
                    <Box sx={{ flex: 1, width: '100%' }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                        {exp.title}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="h6" color="primary.main">
                          {exp.company}
                        </Typography>
                      </Box>

                      {exp.client && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, pl: 0.5 }}>
                          <AccountTreeIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '0.9rem' }} />
                          <Typography variant="body2" color="text.secondary">
                            Client: {exp.client}
                          </Typography>
                        </Box>
                      )}
                      {exp.product && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, pl: 0.5 }}>
                          <OpenInBrowserIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '0.9rem' }} />
                          <Typography variant="body2" color="text.secondary">
                            Product: <a href={exp.product} target="_blank" rel="noopener noreferrer">{exp.product}</a>
                          </Typography>
                        </Box>
                      )}

                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', mb: 1 }}>
                        <CalendarTodayIcon sx={{ mr: 1, fontSize: '0.9rem' }} />
                        <Typography variant="body2">
                          {exp.period}
                        </Typography>
                      </Box>

                      {exp.location && (
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', mb: 2 }}>
                          <LocationOnIcon sx={{ mr: 1, fontSize: '0.9rem' }} />
                          <Typography variant="body2">
                            {exp.location}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      Technologies
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="primary"
                          sx={{ borderRadius: 1 }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      Key Achievements
                    </Typography>
                    <Box sx={{ pl: 1 }}>
                      {exp.achievements.map((achievement, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 1
                          }}
                        >
                          <ArrowRightIcon
                            sx={{
                              color: 'primary.main',
                              mr: 1,
                              mt: 0.3,
                              fontSize: '1rem'
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              lineHeight: 1.6,
                              flex: 1
                            }}
                          >
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </MotionPaper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}

export default Experience;