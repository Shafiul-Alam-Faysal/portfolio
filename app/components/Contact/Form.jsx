"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import axios from "axios";

const Form = () => {
	const [result, setResult] = useState("");

	// const onSubmit = async (event) => {
	// 	event.preventDefault();
	// 	setResult("Sending...");

	// 	const formData = new FormData(event.target);

	// 	try {
	// 		const response = await fetch("/api/contact", {
	// 			method: "POST",
	// 			body: formData,
	// 		});

	// 		const data = await response.json();

	// 		if (data.success) {
	// 			setResult("Form Submitted Successfully");
	// 			event.target.reset();
	// 		} else {
	// 			setResult("Failed to submit. Try again.");
	// 			console.error("Error:", data);
	// 		}
	// 	} catch (error) {
	// 		console.error("Network Error:", error);
	// 		setResult("Something went wrong. Please try again later.");
	// 	}
	// };

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending...");
		const formData = new FormData(event.target);

		try {
			const response = await axios.post("api/contact", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			if (response.data.success) {
				setResult("Form Submitted Successfully");
				event.target.reset();
			} else {
				setResult(response.data.message || "Failed to submit. Try again.");
				console.error("Error:", response.data);
			}
		} catch (error) {
			console.error("Network Error:", error);
			setResult("Something went wrong. Please try again later.");
		}
	};

	return (
		<motion.form
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.9, duration: 0.5 }}
			onSubmit={onSubmit}
			className="max-w-2xl mx-auto"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-10">
				<motion.input
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 1.1, duration: 0.6 }}
					type="text"
					name="name"
					required
					placeholder="Enter your name"
					className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
				/>
				<motion.input
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 1.2, duration: 0.6 }}
					type="email"
					name="email"
					required
					placeholder="Enter your email"
					className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
				/>
			</div>

			<motion.textarea
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 1.3, duration: 0.6 }}
				name="message"
				required
				rows="6"
				placeholder="Enter your message"
				className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
			/>

			<motion.button
				disabled={result === "Sending..."}
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.3 }}
				type="submit"
				className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:hover:bg-darkHover"
			>
				Submit now{" "}
				<Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
			</motion.button>

			<p className="mt-4 text-center">{result}</p>
		</motion.form>
	);
};

export default Form;
