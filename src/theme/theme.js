import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep indigo
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: '#263238', // Blue grey
      light: '#4f5b62',
      dark: '#000a12',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a237e',
      secondary: '#455a64',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      letterSpacing: '-0.01562em',
      color: '#1a237e',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      marginBottom: '1.2rem',
      letterSpacing: '-0.00833em',
      color: '#1a237e',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '1rem',
      letterSpacing: '0em',
      color: '#1a237e',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.8rem',
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      marginBottom: '0.6rem',
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      marginBottom: '0.5rem',
      letterSpacing: '0.0075em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01071em',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.00938em',
      color: '#455a64',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
      color: '#455a64',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        },
        elevation1: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        },
        elevation3: {
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
        },
        outlined: {
          borderWidth: 1.5,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});