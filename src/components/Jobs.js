import React, { useState, useEffect } from 'react';
import Title from './Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const query = graphql`
	{
		allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
			nodes {
				company
				date
				desc {
					name
					id
				}
				position
				strapiId
			}
		}
	}
`;

const Jobs = () => {
	const data = useStaticQuery(query);
	// console.log(data);
	const [ value, setValue ] = useState(0);
	const { allStrapiJobs: { nodes: jobs } } = data;
	const { company, date, position, desc } = jobs[value];

	const animation = useAnimation();
	// inView is false by default
	const [ jobsRef, inView ] = useInView({
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
			className="section jobs"
			ref={jobsRef}
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
			<Title title="Experience" />
			<div className="jobs-center">
				{/* jobs button */}
				<div className="btn-container">
					{jobs.map((item, index) => {
						return (
							<button
								onClick={() => setValue(index)}
								key={item.strapiId}
								className={`job-btn ${index === value && 'active-btn'}`}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				{/* job info */}
				<article className="job-info">
					<h3>{position}</h3>
					<h4>{company}</h4>
					<p className="job-date">{date}</p>

					{desc.map((item) => {
						return (
							<div key={item.id} className="job-desc">
								<FaAngleDoubleRight className="job-icon" />
								<p>{item.name}</p>
							</div>
						);
					})}
				</article>
			</div>
		</motion.section>
	);
};

export default Jobs;
