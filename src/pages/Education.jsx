import { Box, Typography, Container, Paper, Grid2 as Grid, LinearProgress, Chip, useTheme, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LaunchIcon from '@mui/icons-material/Launch';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

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

const education = [
  {
    degree: 'Masters in Cloud Computing',
    institution: 'National College Of Ireland',
    period: '22/01/2024 – Current',
    location: 'Dublin, Ireland',
    level: 'EQF level 7',
    website: 'https://www.ncirl.ie/',
    progress: 60,
    highlights: ['Cloud Architecture', 'DevOps', 'Distributed Systems', 'Security'],
    color: '#6366F1',
  },
  {
    degree: 'Bachelors in Information Technology',
    institution: 'JNTUH University College of Engineering Jagtial',
    period: '01/06/2017 – 01/04/2021',
    location: 'Jagitial, India',
    level: 'EQF level 6',
    website: 'https://jntuhcej.ac.in/',
    progress: 100,
    highlights: ['Software Engineering', 'Web Development', 'Database Systems', 'Algorithms'],
    color: '#10B981',
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    provider: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://www.credly.com/badges/93708c8a-3c4e-4628-a2c5-146aef76816c/public_url',
    icon: '☁️',
    color: '#FF9900',
    skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
  },
  {
    title: 'Blockchain Developer Nanodegree',
    provider: 'Udacity',
    date: '2022',
    credentialUrl: 'https://www.udacity.com/certificate/3J4EH5JR',
    icon: '⛓️',
    color: '#3B82F6',
    skills: ['Smart Contracts', 'DApps', 'Ethereum', 'Web3'],
  },
  {
    title: 'Blockchain Architecture Design And Use Cases',
    provider: 'NPTEL - IIT Kharagpur and IBM',
    date: '2022',
    credentialUrl: null,
    icon: '🔗',
    color: '#8B5CF6',
    skills: ['Blockchain Fundamentals', 'Architecture', 'Use Cases', 'Security'],
  },
];

function Education() {
  const theme = useTheme();

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
            Education Journey
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            My academic path and continuous learning
          </Typography>

          {/* Timeline Indicator */}
          <Box sx={{ position: 'relative', mb: 6 }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                transform: { md: 'translateX(-50%)' },
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #6366F1 0%, #10B981 100%)',
                opacity: 0.3,
              }}
            />

            <Grid container spacing={4}>
              {education.map((edu, index) => (
                <Grid size={12} key={index}>
                  <MotionBox
                    variants={itemVariants}
                    sx={{
                      display: 'flex',
                      justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                      px: { xs: 0, md: 2 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '100%', md: '45%' },
                        position: 'relative',
                        pl: { xs: 6, md: 0 },
                      }}
                    >
                      {/* Timeline Dot */}
                      <Box
                        sx={{
                          position: 'absolute',
                          left: { xs: -25, md: index % 2 === 0 ? 'auto' : -25 },
                          right: { md: index % 2 === 0 ? -25 : 'auto' },
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: edu.color,
                          border: `3px solid ${theme.palette.background.paper}`,
                          boxShadow: theme.shadows[3],
                          zIndex: 1,
                        }}
                      />

                      <MotionPaper
                        elevation={0}
                        sx={{
                          p: 4,
                          height: '100%',
                          background: theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.9)'
                            : 'rgba(30, 41, 59, 0.9)',
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: 3,
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: theme.shadows[4],
                            borderColor: edu.color,
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: `linear-gradient(90deg, ${edu.color} 0%, ${edu.color}99 100%)`,
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 56,
                              height: 56,
                              borderRadius: 2,
                              background: `linear-gradient(135deg, ${edu.color} 0%, ${edu.color}99 100%)`,
                              color: 'white',
                              mr: 2,
                              flexShrink: 0,
                            }}
                          >
                            <SchoolIcon sx={{ fontSize: 28 }} />
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" fontWeight={600} gutterBottom>
                              {edu.degree}
                            </Typography>
                            <Typography variant="subtitle1" color="primary" fontWeight={500}>
                              {edu.institution}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {edu.period}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {edu.location}
                              </Typography>
                            </Box>
                          </Box>

                          <Chip
                            label={edu.level}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.mode === 'light'
                                ? 'rgba(99, 102, 241, 0.1)'
                                : 'rgba(129, 140, 248, 0.1)',
                              color: 'primary.main',
                              fontWeight: 500,
                            }}
                          />
                        </Box>

                        {edu.progress < 100 && (
                          <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2" fontWeight={500}>
                                Progress
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {edu.progress}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={edu.progress}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: theme.palette.mode === 'light'
                                  ? 'rgba(0, 0, 0, 0.08)'
                                  : 'rgba(255, 255, 255, 0.08)',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 4,
                                  background: `linear-gradient(90deg, ${edu.color} 0%, ${edu.color}CC 100%)`,
                                },
                              }}
                            />
                          </Box>
                        )}

                        <Box sx={{ mb: 3 }}>
                          <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
                            Key Areas
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {edu.highlights.map((highlight, idx) => (
                              <Chip
                                key={idx}
                                label={highlight}
                                size="small"
                                variant="outlined"
                                sx={{
                                  borderColor: edu.color,
                                  color: edu.color,
                                  '&:hover': {
                                    backgroundColor: edu.color,
                                    color: 'white',
                                  },
                                }}
                              />
                            ))}
                          </Box>
                        </Box>

                        <Button
                          variant="outlined"
                          size="small"
                          endIcon={<LaunchIcon />}
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            borderColor: edu.color,
                            color: edu.color,
                            '&:hover': {
                              backgroundColor: edu.color,
                              color: 'white',
                              borderColor: edu.color,
                            },
                          }}
                        >
                          Visit Institution
                        </Button>
                      </MotionPaper>
                    </Box>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Certifications Section */}
          <MotionBox variants={itemVariants} sx={{ mt: 8 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 40, color: '#F59E0B' }} />
              Professional Certifications
            </Typography>

            <Grid container spacing={3}>
              {certifications.map((cert, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <MotionPaper
                    elevation={0}
                    variants={itemVariants}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: theme.palette.mode === 'light'
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'rgba(30, 41, 59, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[4],
                        borderColor: cert.color,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        fontSize: 60,
                        opacity: 0.1,
                      }}
                    >
                      {cert.icon}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: `${cert.color}20`,
                          fontSize: 24,
                        }}
                      >
                        {cert.icon}
                      </Box>
                      <VerifiedIcon sx={{ color: cert.color }} />
                    </Box>

                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {cert.provider}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
                      Earned in {cert.date}
                    </Typography>

                    <Box sx={{ flexGrow: 1, mb: 2 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {cert.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: `${cert.color}20`,
                              color: cert.color,
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {cert.credentialUrl && (
                      <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          mt: 'auto',
                          backgroundColor: cert.color,
                          '&:hover': {
                            backgroundColor: cert.color,
                            filter: 'brightness(0.9)',
                          },
                        }}
                      >
                        View Credential
                      </Button>
                    )}
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Education;