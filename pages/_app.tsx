import type {AppProps} from "next/app";
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../styles/theme";
import {AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";
import "./globals.css";

export default function App({Component, pageProps}: AppProps) {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <AppBar color="secondary" position="sticky">
                <Toolbar variant="dense">
                    <Typography
                        variant="h6"
                    >
                        Elemental Reaction Tool
                    </Typography>
                </Toolbar>
            </AppBar>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
