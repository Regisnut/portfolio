import React from 'react';
import {
	FaFacebookSquare,
	FaLinkedin,
	FaDribbbleSquare,
	FaBehanceSquare,
	FaTwitterSquare,
	FaBrowser,
	FaGithub,
	FaInfoCircle
} from 'react-icons/fa';

const data = [
	// {
	//   id: 1,
	//   icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
	//   url: "https://www.twitter.com",
	// },
	{
		id: 2,
		icon: <FaLinkedin className="social-icon" />,
		url: 'https://www.linkedin.com/in/r%C3%A9gis-nuttin-b51b22128/'
	},
	// {
	//   id: 3,
	//   icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
	//   url: "https://www.twitter.com",
	// },
	// {
	//   id: 4,
	//   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
	//   url: "https://www.twitter.com",
	// },
	// {
	//   id: 5,
	//   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
	//   url: "https://www.twitter.com",
	// },
	{
		id: 6,
		icon: <FaGithub className="social-icon" />,
		url: 'https://github.com/regisnut'
	},
	{
		id: 7,
		icon: <FaInfoCircle className="social-icon" />,
		url: 'https://regiscode.netlify.app'
	}
];
const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className="social-link">
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return <ul className={`social-links ${styleClass ? styleClass : ''}`}>

			<div className={`line flex-1`}></div>
		{links}
		</ul>;
};
