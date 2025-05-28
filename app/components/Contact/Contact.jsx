import { assets, sectionData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Form from "./Form";

import { motion } from "motion/react";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="contact"
			className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
		>
			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="text-center mb-2 text-lg font-ovo"
			>
				{sectionData.contact.name}
			</motion.h4>
			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="text-center text-5xl font-ovo"
			>
				{sectionData.contact.title}
			</motion.h2>

			<motion.p
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
			>
				{sectionData.contact.description}
			</motion.p>
			<Form />
		</motion.div>
	);
};

export default Contact;
