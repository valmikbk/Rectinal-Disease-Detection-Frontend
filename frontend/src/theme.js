import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#0b1220",   // app background
      paper: "#111a2e"      // cards
    },

    primary: {
      main: "#3b82f6"       // blue
    },

    secondary: {
      main: "#22c55e"       // green
    },

    success: {
      main: "#22c55e"
    },

    warning: {
      main: "#f59e0b"
    },

    error: {
      main: "#ef4444"
    },

    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af"
    }
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },

    body1: {
      fontSize: "0.95rem"
    },
    body2: {
      fontSize: "0.85rem",
      color: "#9ca3af"
    }
  },

  shape: {
    borderRadius: 14
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(90deg, #0b1220, #111a2e)",
          boxShadow: "none"
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    }
  }
});

export default theme;
