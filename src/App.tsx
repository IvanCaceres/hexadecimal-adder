import React from 'react';
import { Typography, createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core"
import {
  indigo,
  lightBlue,
  blueGrey
} from "@material-ui/core/colors"
import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard'
import Layout from './Layout/Layout'

const theme = createMuiTheme({
  typography: {
    highlight: {
      color: indigo[900],
      fontWeight: 600
    }
  },
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: lightBlue[500],
    },
    drawer: {
      main: indigo[600]
    }
  },
})

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    drawer: Palette['primary'];
  }
  interface PaletteOptions {
    drawer: PaletteOptions['primary'];
  }
}

declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    highlight: React.CSSProperties
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    highlight: React.CSSProperties
  }
}

declare module "@material-ui/core/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    highlight: true
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
