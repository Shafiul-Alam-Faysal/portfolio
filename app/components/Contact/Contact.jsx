import { assets, sectionData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Form from "./Form";

const Contact = () => {
	return (
		<div
			id="contact"
			className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
		>
			<h4 className="text-center mb-2 text-lg font-ovo">
				{sectionData.contact.name}
			</h4>
			<h2 className="text-center text-5xl font-ovo">
				{sectionData.contact.title}
			</h2>

			<p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
				{sectionData.contact.description}
			</p>
			<Form />
		</div>
	);
};

export default Contact;
