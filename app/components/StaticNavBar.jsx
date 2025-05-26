"use client";

import { assets } from "@/assets/assets";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const StaticNavBar = () => {
	const [isScroll, setIsScroll] = useState(false);

	const sideMenuRef = useRef();

	const openMenu = () => {
		sideMenuRef.current.style.transform = "translateX(-16rem)";
	};
	const closeMenu = () => {
		sideMenuRef.current.style.transform = "translateX(16rem)";
	};

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
			<div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
				<Image src={assets.header_bg_color} alt="" className="w-full" />
			</div>
			<nav
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
					${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
			>
				<a href="#top">
					<h1 className="font-playfair text-4xl w-28 cursor-pointer mr-14 flex items-center gap-1">
						Faysal{" "}
						<span className="w-2 h-2 mt-[22px] rounded-full bg-red-500 inline-block" />
					</h1>
				</a>

				<ul
					className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
					 bg-white shadow-sm bg-opacity-50"
				>
					<li>
						<a className="font-ovo" href="#top">
							Home
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#about">
							About me
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#services">
							Services
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#work">
							My Work
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#contact">
							Contact me
						</a>
					</li>
				</ul>

				<div className="flex items-center gap-4">
					<button>
						<Image src={assets.moon_icon} alt="moon-icon" className="w-6" />
					</button>

					<a
						href="#contact"
						className="font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
					>
						Contact{" "}
						<Image
							src={assets.arrow_icon}
							alt="cursor-pointer"
							className="w-3"
							width={12}
							height={12}
						/>
					</a>
					<button className="block md:hidden ml-3" onClick={openMenu}>
						<Image src={assets.menu_black} alt="menu_black" className="w-6" />
					</button>
				</div>

				{/* --------------mobile menu-------------- */}
				<ul
					ref={sideMenuRef}
					className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
				>
					<div className="absolute right-6 top-6" onClick={closeMenu}>
						<Image
							src={assets.close_black}
							alt="close_black"
							className="w-5 cursor-pointer"
						/>
					</div>

					<li>
						<a className="font-ovo" onClick={closeMenu} href="#top">
							Home
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeMenu} href="#about">
							About me
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeMenu} href="#services">
							Services
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeMenu} href="#work">
							My Work
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeMenu} href="#contact">
							Contact me
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default StaticNavBar;

/*

Navbar styling
Key Improvements:
Background Image Setup:

Used Next.js Image component with fill prop to cover the entire navbar area

Fixed positioning ensures it stays behind the navbar

object-cover maintains aspect ratio while filling space

Added quality={100} for better image clarity

Navbar Styling:

Added semi-transparent dark background (bg-black bg-opacity-30) for better text readability

Included backdrop-blur-sm for a modern frosted glass effect

Improved the contact button with hover transition

Accessibility & Performance:

Added proper width and height to the arrow icon

Included meaningful alt text for the background image

Maintained all existing functionality while improving visuals

Responsive Behavior:

The background will automatically adjust to the navbar height

Content remains fully responsive as in your original design

The background image will now perfectly fit behind your navbar while maintaining all the existing functionality and responsive behavior.


/////////////////////////////////////////////

<div className="fixed top-0 left-0 w-full h-[80px] -z-10">
				<Image
					src={assets.header_bg_color}
					alt="Navbar background"
					fill
					className="object-contain"
					quality={100}
				/>
			</div>
			<nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-black bg-opacity-30 backdrop-blur-sm">
				<a href="#top">
					<h1 className="font-playfair text-4xl w-28 cursor-pointer mr-14 flex items-center gap-1">
						Faysal{" "}
						<span className="w-2 h-2 mt-[22px] rounded-full bg-red-500 inline-block" />
					</h1>
				</a>

				<ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 shadow-sm">
					<li>
						<a className="font-ovo" href="#top">
							Home
						</a>
					</li>

*/
