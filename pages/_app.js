// pages/_app.js
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';

// Crear un tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db', // Color primario personalizado
    },
    secondary: {
      main: '#f50057', // Color secundario
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline asegura estilos consistentes */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
