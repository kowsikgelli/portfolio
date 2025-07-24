import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#6366F1',
            light: '#818CF8',
            dark: '#4F46E5',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#10B981',
            light: '#34D399',
            dark: '#059669',
            contrastText: '#ffffff',
          },
          background: {
            default: '#F9FAFB',
            paper: '#FFFFFF',
            alternate: '#F3F4F6',
          },
          text: {
            primary: '#111827',
            secondary: '#6B7280',
          },
          divider: '#E5E7EB',
          success: {
            main: '#10B981',
            light: '#34D399',
            dark: '#059669',
          },
          error: {
            main: '#EF4444',
            light: '#F87171',
            dark: '#DC2626',
          },
          warning: {
            main: '#F59E0B',
            light: '#FCD34D',
            dark: '#D97706',
          },
          info: {
            main: '#3B82F6',
            light: '#60A5FA',
            dark: '#2563EB',
          },
        }
      : {
          primary: {
            main: '#818CF8',
            light: '#A5B4FC',
            dark: '#6366F1',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#34D399',
            light: '#6EE7B7',
            dark: '#10B981',
            contrastText: '#ffffff',
          },
          background: {
            default: '#0F172A',
            paper: '#1E293B',
            alternate: '#1A202C',
          },
          text: {
            primary: '#F9FAFB',
            secondary: '#CBD5E1',
          },
          divider: '#334155',
          success: {
            main: '#34D399',
            light: '#6EE7B7',
            dark: '#10B981',
          },
          error: {
            main: '#F87171',
            light: '#FCA5A5',
            dark: '#EF4444',
          },
          warning: {
            main: '#FBBF24',
            light: '#FCD34D',
            dark: '#F59E0B',
          },
          info: {
            main: '#60A5FA',
            light: '#93BBFC',
            dark: '#3B82F6',
          },
        }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      marginBottom: '2rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1.25rem',
      letterSpacing: '-0.00em',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
      letterSpacing: '0.00em',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      marginBottom: '0.75rem',
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      marginBottom: '0.5rem',
      letterSpacing: '0.0075em',
      lineHeight: 1.5,
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
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
      lineHeight: 1.57,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    mode === 'light'
      ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      : '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
    mode === 'light'
      ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      : '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    mode === 'light'
      ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      : '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    mode === 'light'
      ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      : '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
    ...Array(20).fill(
      mode === 'light'
        ? '0 25px 50px -12px rgb(0 0 0 / 0.25)'
        : '0 25px 50px -12px rgb(0 0 0 / 0.5)'
    ),
  ],
});

export const createCustomTheme = (mode) => {
  const theme = createTheme(getDesignTokens(mode));
  
  return createTheme(theme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
            backgroundColor: theme.palette.background.default,
          },
          '*': {
            transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
          },
          '::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: mode === 'light' ? '#F3F4F6' : '#1E293B',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: mode === 'light' ? '#D1D5DB' : '#475569',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#9CA3AF' : '#64748B',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius / 2,
            textTransform: 'none',
            fontWeight: 600,
            padding: '10px 24px',
            boxShadow: 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[3],
            },
          },
          contained: {
            '&:hover': {
              boxShadow: theme.shadows[4],
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius,
            backgroundImage: 'none',
            transition: 'box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[2],
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: theme.shadows[4],
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius / 2,
            fontWeight: 500,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
          outlined: {
            borderWidth: 2,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: 'inherit',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            boxShadow: theme.shadows[3],
            border: `3px solid ${theme.palette.background.paper}`,
          },
        },
      },
    },
  });
};

export const lightTheme = createCustomTheme('light');
export const darkTheme = createCustomTheme('dark');