import { Analytics } from "@vercel/analytics/next";

import {
	Outfit as OutfitFont,
	Ovo as OvoFont,
	Playfair_Display as PlayfairFont,
} from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

// Load all fonts with CSS variables
const outfit = OutfitFont({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-outfit",
});

const ovo = OvoFont({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-ovo",
});

const playfair = PlayfairFont({
	subsets: ["latin"],
	variable: "--font-playfair",
});

export const metadata = {
	title: "Shafiul Alam Faysal | Portfolio - CodeForgeGrowth",
	description:
		"Portfolio of Shafiul Alam Faysal - showcasing work, services, and contact information.",
	keywords: [
		"portfolio",
		"developer",
		"Next.js",
		"frontend",
		"Faysal",
		"CodeForgeGrowth",
	],
	author: "Shafiul Alam Faysal",
	robots: "index, follow",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				{/* Prevent dark mode flash */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function () {
								try {
									const theme = localStorage.getItem('theme');
									const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
									if (theme === 'dark' || (!theme && prefersDark)) {
										document.documentElement.classList.add('dark');
									}
								} catch (_) {}
							})();
						`,
					}}
				/>
			</head>
			<body
				className={`${outfit.variable} ${ovo.variable} ${playfair.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
			>
				{children}
			</body>
		</html>
	);
}
