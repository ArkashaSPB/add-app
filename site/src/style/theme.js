import { createTheme } from "@mui/material/styles";
import "@fontsource/inter/100.css"; // Extra Light
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // Semi Bold
import "@fontsource/inter/700.css"; // Bold

import fonts from "./fonts.js"; // Импортируем список шрифтов

const theme = createTheme({
	typography: {
		fontFamily: "'Montserrat', sans-serif",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
	palette: {
		primary: {
			main: "#65B983",
		},
		secondary: {
			main: "#008660",
		},
		background: {
			default: "#f5f5f5",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        ${fonts}
        
      `,
		},
	},
});

export default theme;
