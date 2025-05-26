"use client";

import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

import Image from "next/image";
import { assets } from "@/assets/assets";
import NavbarBackground from "./NavbarBackground";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 50) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		});
	}, []);

	return (
		<>
			<NavbarBackground />
			<nav
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
					${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
			>
				<a href="#top">
					<h1 className="font-playfair text-4xl w-28 cursor-pointer mr-14 flex items-center gap-1">
						Faysal
						<span className="w-2 h-2 mt-[22px] rounded-full bg-red-500 inline-block" />
					</h1>
				</a>

				{/* Nav */}
				<NavLinks
					menuOpen={menuOpen}
					isScroll={isScroll}
					toggleMenu={toggleMenu}
				/>

				<div className="flex items-center gap-4">
					<button>
						<Image src={assets.moon_icon} alt="moon-icon" className="w-6" />
					</button>

					<a
						href="#contact"
						className="font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
					>
						Contact
						<Image
							src={assets.arrow_icon}
							alt="arrow"
							className="w-3"
							width={12}
							height={12}
						/>
					</a>

					<button className="block md:hidden ml-3" onClick={toggleMenu}>
						<Image src={assets.menu_black} alt="menu" className="w-6" />
					</button>
				</div>

				{/* Mobile Menu */}
				{/* <NavLinks menuOpen={menuOpen} toggleMenu={toggleMenu} /> */}
			</nav>
		</>
	);
};

export default Navbar;
