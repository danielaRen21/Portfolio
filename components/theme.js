import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontFamily: "Montserrat, Helvetica, Arial,sans-serif"
      },
    palette: {
      primary: {
        main: '#664954',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

export const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        variants: [
            {
              props: { variant: 'dano' },
              style: {
                background: '#118ACA',
                color: '#FFF',
                textTransform: 'none',
                border: `2px outlined ${defaultTheme.palette.primary.main}`,
              },
            },
          ],
      },
    },
  });