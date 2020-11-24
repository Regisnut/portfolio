import React from 'react';
// import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';
import branding from "../assets/branding.svg"
import coding from "../assets/coding.svg"
import mobile from "../assets/mobile.svg"

export default [
	{
		id: 1,
		icon: <img loading="lazy" className="service-img"  src={branding} alt="branding" />,
		title: 'WEB DESIGN',
		text: `Defining the problem, identifying the scope and finally, organising the design roadmap, LOGO proposal, colors setup to bring out 100% of every project.`
	},
	{
		id: 2,
		icon: <img loading="lazy" className="service-img"  src={coding} alt="coding" />,
		title: 'WEB DEVELOPMENT',
		text: `The web development will ensure a high performance for you website, secure which will provide you success, and will be dedicated to your business.`
	},
	{
		id: 3,
		icon: <img loading="lazy" className="service-img"  src={mobile} alt="mobile" />,
		title: 'APP DESIGN',
		text: `Businesses optimise their online presence across desktop, tablet and mobile device. The project will be responsive, it will run on multiple screen. `
	},

];
