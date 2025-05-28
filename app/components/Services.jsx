import { assets, sectionData, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";

const Services = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			id="services"
			className="w-full px-[12%] py-10 scroll-mt-20"
		>
			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="text-center mb-2 text-lg font-ovo"
			>
				{sectionData.services.name}
			</motion.h4>
			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="text-center text-5xl font-ovo"
			>
				{sectionData.services.title}
			</motion.h2>
			<motion.p
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
			>
				{sectionData.services.description}
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.6 }}
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
			>
				{serviceData.map(({ icon, title, description, link }, index) => (
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						key={index}
						className="group relative p-4 rounded-lg border border-gray-400 hover:shadow-black  overflow-hidden cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
					>
						<Image src={icon} alt={title} className="w-10" />
						<h3 className="text-lg my-4 text-gray-700 dark:text-white">
							{title}
						</h3>

						{/* Preview text with clamp */}
						<p className="text-sm text-gray-600 leading-5 line-clamp-2 dark:text-white/80">
							{description}
						</p>

						{/* Full description overlay */}
						{/* <div className="absolute inset-0 bg-white p-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-700 rounded-lg shadow-lg">
							<h3 className="text-lg mb-2 text-gray-700">{title}</h3>
							<p className="text-sm text-gray-600 leading-5">{description}</p>
						</div> */}

						<a href={link} className="flex items-center gap-2 text-sm mt-5">
							Read more{" "}
							<Image
								alt="right_arrow"
								src={assets.right_arrow}
								className="w-4"
							/>
						</a>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Services;
