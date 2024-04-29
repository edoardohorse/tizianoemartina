import type {Metadata} from "next";
import {CookiesProvider} from 'next-client-cookies/server';

import "./globals.css";

import {createTheme, ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
	title: "Tiziano e Martina",
	description: "Visita il sito informazioni per il matrimonio di Tiziano e Martina",
};


export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<CookiesProvider>
			<html lang="en">
			<meta name="theme-color" content="#dbe0d7"/>
			{/*   <head>
			 <title>Tiziano e Martina</title>
			 </head>*/}
			<body>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					{children}
				</ThemeProvider>
			</AppRouterCacheProvider>
			</body>
			</html>
		</CookiesProvider>
	);
}
