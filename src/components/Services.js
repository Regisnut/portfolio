import React, { useEffect } from 'react';
import Title from './Title';
import services from '../constants/services';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = ({ title }) => {
	const animation = useAnimation();
	// inView is false by default
	const [ servicesRef, inView ] = useInView({
		triggerOnce: true,
		rootMargin: '-50px'
	});

	useEffect(
		() => {
			if (inView) {
				animation.start('visible');
			}
		},
		[ animation, inView ]
	);

	return (
		<section className="section bg-grey">
			<Title title="services" />
			<motion.div
				className="section-center services-center"
				ref={servicesRef}
				animate={animation}
				initial="hidden"
				variants={{
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.8, ease: [ 0.6, 0.05, -0.01, 0.9 ] }
					},
					hidden: { opacity: 0, y: 72 }
				}}
			>
				{services.map((service) => {
					const { id, icon, title, text } = service;
					return (
						<article key={id} className="service">
							{icon}
							<h4>{title}</h4>
							<div className="underline" />
							<p>{text}</p>
						</article>
					);
				})}
			</motion.div>
		</section>
	);
};

export default Services;
