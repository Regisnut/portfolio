import React, { useEffect } from 'react';
import Title from './Title';
import Project from './Project';
import { Link } from 'gatsby';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = ({ projects, title, showLink }) => {
	const animation = useAnimation();
	// inView is false by default
	const [ projectsRef, inView ] = useInView({
		triggerOnce: true,
		rootMargin: '-100px'
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
		<motion.section
			className="section projects"
			ref={projectsRef}
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
			<Title title={title} />
			<div className="section-center projects-center">
				{projects.map((project, index) => {
					return <Project key={project.id} index={index} {...project} />;
				})}
			</div>
			{showLink && (
				<Link to="/projects" className="btn center-btn">
					projects
				</Link>
			)}
		</motion.section>
	);
};

export default Projects;
