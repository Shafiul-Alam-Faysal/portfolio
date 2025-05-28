import { useDarkMode } from "@/app/context/DarkModeContext";
import { assets } from "@/assets/assets";
import Image from "next/image";

/**
 * Props:
 * @param {boolean} menuOpen - Is the mobile menu open?
 * @param {function} toggleMenu - Function to toggle the menu open/closed
 * @param {boolean} isScroll - Whether the page has been scrolled
 */
const navLinks = [
	{ id: 1, name: "Home", href: "#top" },
	{ id: 2, name: "About me", href: "#about" },
	{ id: 3, name: "Services", href: "#services" },
	{ id: 4, name: "My Work", href: "#work" },
	{ id: 5, name: "Contact me", href: "#contact" },
];

const NavLinks = ({ menuOpen, toggleMenu, isScroll }) => {
	const { isDarkMode } = useDarkMode();

	return (
		<>
			{/* Desktop Navigation */}
			<ul
				className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${
						isScroll
							? ""
							: "bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
					}`}
			>
				{navLinks.map((link) => (
					<li key={link.id}>
						<a className="font-ovo" href={link.href}>
							{link.name}
						</a>
					</li>
				))}
			</ul>

			{/* Mobile Navigation */}
			<ul
				className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white ${
					menuOpen ? "right-0" : "-right-64"
				}`}
				role="navigation"
				aria-label="Mobile menu"
			>
				{/* Close button */}
				<button
					className="absolute right-6 top-6"
					onClick={toggleMenu}
					aria-label="Close menu"
				>
					<Image
						src={isDarkMode ? assets.close_white : assets.close_black}
						alt="Close menu"
						className="w-5 cursor-pointer"
					/>
				</button>

				{navLinks.map((link) => (
					<li key={link.id}>
						<a className="font-ovo" href={link.href} onClick={toggleMenu}>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default NavLinks;
