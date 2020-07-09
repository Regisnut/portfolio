import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Image from 'gatsby-image';
import SEO from '../components/SEO';

import { motion } from 'framer-motion';

const About = ({ data: { about: { nodes } } }) => {
	const { title, stack, info, image } = nodes[0];

	const child = {
		initial: { y: 100 },
		animate: {
			y: 0,
			transition: {
				duration: 1,
				ease: [ 0.6, 0.05, -0.01, 0.9 ]
			}
		}
	};
	return (
		<Layout>
			<SEO title="about" decription="about me" />
			<section className="about-page">
				<motion.div
					className="section-center about-center"
					variants={child}
					initial="initial"
					animate="animate"
				>
					<Image fluid={image.childImageSharp.fluid} className="about-img" />

					<article className="about-text" variants={child}>
						<Title title={title} />
						<p>{info}</p>
						<div className="about-stack">
							{stack.map((item) => {
								return <span key={item.id}>{item.title}</span>;
							})}
						</div>
					</article>
				</motion.div>
			</section>
		</Layout>
	);
};
export const query = graphql`
	{
		about: allStrapiAbout {
			nodes {
				info
				stack {
					title
					id
				}
				title
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
							src
						}
					}
				}
			}
		}
	}
`;

export default About;
