import { Box, Typography, Container, Paper, Grid2 as Grid, LinearProgress, useTheme, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <CodeIcon />,
    color: '#6366F1',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <ViewInArIcon />,
    color: '#10B981',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Express.js', level: 90 },
      { name: 'Redux', level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <CloudIcon />,
    color: '#F59E0B',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'Serverless', level: 90 },
    ],
  },
  {
    title: 'Databases & Tools',
    icon: <StorageIcon />,
    color: '#EF4444',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'DynamoDB', level: 90 },
      { name: 'Redis', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'Agile/Scrum', level: 90 },
    ],
  },
];

function Skills() {
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
              mb: 4,
            }}
          >
            Technical Skills
          </Typography>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={category.title}>
                <MotionPaper
                  elevation={0}
                  variants={itemVariants}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: theme.palette.mode === 'light'
                      ? 'rgba(255, 255, 255, 0.8)'
                      : 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[4],
                      borderColor: category.color,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}99 100%)`,
                        color: 'white',
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={600}>
                      {category.title}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {category.skills.map((skill) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2" fontWeight={500}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: theme.palette.mode === 'light'
                              ? 'rgba(0, 0, 0, 0.08)'
                              : 'rgba(255, 255, 255, 0.08)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}CC 100%)`,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>

          {/* Certifications Section */}
          <MotionBox
            variants={itemVariants}
            sx={{ mt: 6 }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 40, color: '#F59E0B' }} />
              Certifications
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <MotionPaper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: theme.palette.mode === 'light'
                      ? 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
                      : 'linear-gradient(135deg, #78350F 0%, #92400E 100%)',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[4],
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <VerifiedIcon sx={{ color: '#F59E0B', fontSize: 32 }} />
                    <Box>
                      <Typography variant="h5" fontWeight={600} gutterBottom>
                        AWS Certified Solutions Architect
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        Associate Level
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Key Competencies:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
                      <li>
                        <Typography variant="body2">
                          Designing scalable, highly available, and fault-tolerant systems on AWS
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Implementing cost-optimization strategies and security best practices
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Architecting hybrid and multi-tier applications using AWS services
                        </Typography>
                      </li>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.credly.com/badges/93708c8a-3c4e-4628-a2c5-146aef76816c/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 3,
                      background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                      },
                    }}
                  >
                    Verify Certificate
                  </Button>
                </MotionPaper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <MotionPaper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: theme.palette.mode === 'light'
                      ? 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
                      : 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[4],
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <VerifiedIcon sx={{ color: '#3B82F6', fontSize: 32 }} />
                    <Box>
                      <Typography variant="h5" fontWeight={600} gutterBottom>
                        Blockchain Fundamentals
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        NPTEL Certification
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Core Knowledge Areas:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
                      <li>
                        <Typography variant="body2">
                          Understanding blockchain architecture and consensus mechanisms
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Smart contract development and deployment fundamentals
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Cryptographic principles and distributed ledger technology
                        </Typography>
                      </li>
                    </Box>
                  </Box>
                </MotionPaper>
              </Grid>
            </Grid>
          </MotionBox>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Skills;