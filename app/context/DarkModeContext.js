"use client";
import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("theme", isDarkMode ? "dark" : "");
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => useContext(DarkModeContext);
