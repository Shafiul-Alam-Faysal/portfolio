import { assets } from "@/assets/assets";
import Image from "next/image";

import { motion, scale, spring } from "motion/react";

const Header = () => {
	return (
		<header
			id="top"
			className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-y-6 px-4"
		>
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
			>
				<Image
					src={assets.profile_img}
					alt="Profile image of Shafiul Alam Faysal"
					className="rounded-full w-32"
				/>
			</motion.div>
			<motion.h3
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
			>
				Hi! I&apos;m Shafiul Alam Faysal{" "}
				<Image src={assets.hand_icon} alt="Waving hand icon" className="w-6" />
			</motion.h3>
			<motion.h1
				initial={{ y: -30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.3 }}
				className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-ovo leading-tight"
			>
				frontend web developer based in Bangladesh
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.7 }}
				className="max-w-2xl mx-auto font-ovo"
			>
				I am a React Next.js developer from Dhaka, Bangladesh.
			</motion.p>

			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
				<motion.a
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1 }}
					href="#contact"
					className="px-10 py-3 border rounded-full
						 bg-black text-white flex items-center gap-2 dark:bg-transparent"
				>
					contact me{" "}
					<Image
						src={assets.right_arrow_white}
						alt="Right arrow icon"
						className="w-4"
					></Image>
				</motion.a>

				<motion.a
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.2 }}
					href="/Resume_Shafiul_Alam_Faysal.pdf"
					download
					target="_blank"
					rel="noopener noreferrer"
					className="px-10 py-3 border  rounded-full border-gray-500
						  flex items-center gap-2 bg-white transition dark:text-black"
				>
					my resume{" "}
					<Image
						src={assets.download_icon}
						alt="Download icon"
						className="w-4"
					></Image>
				</motion.a>
			</div>
		</header>
	);
};

export default Header;
