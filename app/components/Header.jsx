import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
	return (
		<header
			id="top"
			className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-y-6 px-4"
		>
			<div className="">
				<Image
					src={assets.profile_img}
					alt="Profile image of Shafiul Alam Faysal"
					className="rounded-full w-32"
				/>
			</div>
			<h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
				Hi! I'm Shafiul Alam Faysal{" "}
				<Image src={assets.hand_icon} alt="Waving hand icon" className="w-6" />
			</h3>
			<h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-ovo leading-tight">
				frontend web developer based in Bangladesh
			</h1>
			<p className="max-w-2xl mx-auto font-ovo">
				I am a React Next.js developer from Dhaka, Bangladesh.
			</p>
			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
				<a
					href="#contact"
					className="px-10 py-3 border border-white rounded-full
						 bg-black text-white flex items-center gap-2 hover:bg-gray-100 transition"
				>
					contact me{" "}
					<Image
						src={assets.right_arrow_white}
						alt="Right arrow icon"
						className="w-4"
					></Image>
				</a>

				<a
					href="/sample-resume.pdf"
					download
					target="_blank"
					rel="noopener noreferrer"
					className="px-10 py-3 border  rounded-full border-gray-500
						  flex items-center gap-2 hover:bg-gray-100 transition"
				>
					my resume{" "}
					<Image
						src={assets.download_icon}
						alt="Download icon"
						className="w-4"
					></Image>
				</a>
			</div>
		</header>
	);
};

export default Header;
