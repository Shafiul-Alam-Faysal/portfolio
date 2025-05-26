import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import Contact from "@/app/components/Contact/Contact";

export const assets = {
	user_image,
	code_icon,
	code_icon_dark,
	edu_icon,
	edu_icon_dark,
	project_icon,
	project_icon_dark,
	vscode,
	firebase,
	figma,
	git,
	mongodb,
	right_arrow_white,
	logo,
	logo_dark,
	mail_icon,
	mail_icon_dark,
	profile_img,
	download_icon,
	hand_icon,
	header_bg_color,
	moon_icon,
	sun_icon,
	arrow_icon,
	arrow_icon_dark,
	menu_black,
	menu_white,
	close_black,
	close_white,
	web_icon,
	mobile_icon,
	ui_icon,
	graphics_icon,
	right_arrow,
	send_icon,
	right_arrow_bold,
	right_arrow_bold_dark,
};

export const workData = [
	{
		title: "Frontend project",
		description: "Web Design",
		bgImage: "/work-1.png",
	},
	{
		title: "Geo based app",
		description: "Mobile App",
		bgImage: "/work-2.png",
	},
	{
		title: "Photography site",
		description: "Web Design",
		bgImage: "/work-3.png",
	},
	{
		title: "UI/UX designing",
		description: "UI/UX Design",
		bgImage: "/work-4.png",
	},
];

export const serviceData = [
	{
		icon: assets.web_icon,
		title: "Web design",
		description:
			"Web development is the process of building, programming, and maintaining websites and web applications. It includes everything from creating simple static pages to complex dynamic platforms.",
		link: "",
	},
	{
		icon: assets.mobile_icon,
		title: "Mobile app",
		description:
			"Mobile app development involves creating software for mobile devices like smartphones and tablets. It requires expertise in native or cross-platform frameworks to deliver responsive, user-friendly apps.",
		link: "",
	},
	{
		icon: assets.ui_icon,
		title: "UI/UX design",
		description:
			"UI/UX design focuses on creating a seamless user experience and visually appealing interfaces. It includes wireframing, prototyping, and interaction design to enhance usability.",
		link: "",
	},
	{
		icon: assets.graphics_icon,
		title: "Graphics design",
		description:
			"Creative design solutions to enhance visual communication through illustrations, typography, branding, and layout. It helps in crafting strong visual identities for businesses.",
		link: "",
	},
];

export const infoList = [
	{
		icon: assets.code_icon,
		iconDark: assets.code_icon_dark,
		title: "Languages",
		description: "HTML, CSS, JavaScript React Js, Next Js",
	},
	{
		icon: assets.edu_icon,
		iconDark: assets.edu_icon_dark,
		title: "Education",
		description: "B.Tech in Computer Science",
	},
	{
		icon: assets.project_icon,
		iconDark: assets.project_icon_dark,
		title: "Projects",
		description: "Built more than 5 projects",
	},
];

export const toolsData = [
	assets.vscode,
	assets.firebase,
	assets.figma,
	assets.git,
];

export const sectionData = {
	AboutMe: {
		name: "Introduction",
		title: "About me",
		description: `👋 I'm Shafiul Alam Faysal, a frontend developer from Bangladesh. I
      build fast, responsive, and user-friendly web apps using React,
      Next.js, and Tailwind CSS. I'm passionate about clean design,
      smooth user experiences, and writing maintainable code.`,
	},
	services: {
		name: "What I offer",
		title: "My Services",
		description: `👋 I'm Shafiul Alam Faysal, a frontend developer from Bangladesh. I
      build fast, responsive, and user-friendly web apps using React, Next.js,
      and Tailwind CSS. I'm passionate about clean design, smooth user
      experiences, and writing maintainable code.`,
	},
	work: {
		name: "My portfolio",
		title: "My latest work",
		description: `Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.`,
	},
	contact: {
		name: "Connect with me",
		title: "Get in touch",
		description: `I'd love to hear from you! If you have any questions, feedback, or just want to say hi, please don't hesitate to reach out, please use the form below`,
	},
};
