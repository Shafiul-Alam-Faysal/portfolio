"use client";

import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function Home() {
	return (
		<DarkModeProvider>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Work />
			<Contact />
			<Footer />
		</DarkModeProvider>
	);
}
