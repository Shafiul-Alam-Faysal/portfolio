"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "f0c55c4f-387f-4fe6-8db1-96d1e2250e8a");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<form onSubmit={onSubmit} className="max-w-2xl mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-10">
				<input
					type="text"
					placeholder="Enter your name"
					required
					className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
					name="name"
				/>
				<input
					type="text"
					placeholder="Enter your email"
					required
					className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
					name="email"
				/>
			</div>
			<textarea
				rows="6"
				placeholder="Enter your message"
				required
				className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
				name="message"
			></textarea>
			<button
				type="submit"
				className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
			>
				Submit now{" "}
				<Image src={assets.right_arrow_white} alt="" className="w-4" />
			</button>
			<p className="mt-4">{result}</p>
		</form>
	);
};

export default Form;
