// import Navbar from "./components/Navbar.jsx";

import About from "./components/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Work />
			<Contact />
			<Footer />
		</>
	);
}
