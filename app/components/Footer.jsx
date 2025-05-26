import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="mt-20">
			<div className="text-center">
				<h1 className="font-playfair text-4xl w-36 mx-auto flex items-center gap-1 mb-2">
					Faysal
					<span className="w-2 h-2 mt-[22px] rounded-full bg-red-500 inline-block" />
				</h1>
				<div className="w-max flex items-center gap-2 mx-auto">
					<Image src={assets.mail_icon} alt="" className="w-6" />
					shafiulalamfaysal@gmail.com
				</div>
			</div>

			<div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
				<p>
					© {new Date().getFullYear()} Shafiul Alam Faysal. All rights reserved.
				</p>
				<ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
					<li>
						<a target="_blank" href="">
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
