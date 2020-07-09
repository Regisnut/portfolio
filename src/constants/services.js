import React from 'react';
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';
export default [
	{
		id: 1,
		icon: <FaCode className="service-icon" />,
		title: 'web development',
		text: `I provide web app that matches the needs of your business. Looking for a site with a simple structure and easy to use content management that is fast.`
	},
	{
		id: 2,
		icon: <FaSketch className="service-icon" />,
		title: 'web design',
		text: `The most important part of your website is your content, and design will highlight it.  The design produced will be modern, simple to read, and dedicated to your business.`
	},
	{
		id: 3,
		icon: <FaAndroid className="service-icon" />,
		title: 'app design',
		text: `Businesses optimise their online presence across desktop, tablet and mobile device. The project will be responsive, it will run on multiple screen, especially on mobile device. `
	}
];
