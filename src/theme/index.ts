import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto', // Your Google Font
            'sans-serif',
            "Playfair Display"
          ].join(','),
    }
})