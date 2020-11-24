import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
	{
		site {
			siteMetadata {
				author
				siteDesc: description
				siteUrl
				siteTitle: title
				image
				twitterUsername
			}
		}
	}
`;

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(query);
	const { siteDesc, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata;

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDesc} />
			<meta name="image" content={image} />
			<meta property="og:type" content="website"/>

			         <link rel="canonical" href={siteUrl} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" title={`${title} | ${siteTitle}`} />
            <meta property="og:description" content={description || siteDesc} />
            <meta property="og:image" content={image} />
       

			{/* twitter cards */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={twitterUsername} />
			<meta name="twitter:title" content={siteTitle} />
			<meta name="twitter:description" content={siteDesc} />
			<meta name="twitter:image" content={`${siteUrl}${image}`} />
		</Helmet>
	);
};

export default SEO;
