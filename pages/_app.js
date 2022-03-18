import { Box, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import { theme } from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
