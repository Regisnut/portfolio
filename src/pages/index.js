import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import SEO from '../components/SEO';
import FinalSection from "../components/FinalSection"
import Testimonial from "../components/Testimonial"

export default ({ data }) => {
	const { allStrapiProjects: { nodes: projects }, allStrapiBlogs: { nodes: blogs } } = data;
	return (
		<Layout>
			<SEO title="Home" description="" />
			<Hero />
			<Services />
			<Jobs />
			<Projects projects={projects} title="featured projects" showLink />
			<Blogs blogs={blogs} title="latest articles" showLink />
			<FinalSection title="Ready?"/>
			<Testimonial title="Client's reviews"/>
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiProjects(filter: { featured: { eq: true } }) {
			nodes {
				github
				id
				description
				Title
				url
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
							src
						}
					}
				}
				stack {
					id
					title
				}
			}
		}
		allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
			nodes {
				slug
				content
				desc
				date(formatString: "MMMM Do, YYYY")
				id
				title
				category
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
