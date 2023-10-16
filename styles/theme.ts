import {createTheme} from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#6081a3",
            contrastText: "#FFF",
        },
        secondary: {
            main: "#1d538a",
        },
        info: {
            main: "#ffffff",
            contrastText: "#000000",
        },
        text: {
            primary: "#09002A",
        },
        background: {
            default: "#1f5287",
        }
    },
});

export default theme;
