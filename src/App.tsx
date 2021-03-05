import React from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core"
import {
  indigo,
  lightBlue,
} from "@material-ui/core/colors"
import './App.css';
import Router from "./router"

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
      <Router />
    </ThemeProvider>
  );
}

export default App;
