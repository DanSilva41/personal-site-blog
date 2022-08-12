import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteBanner
          siteUrl
          social {
            github
            linkedin
            twitter
          }
          owner {
            name
            occupation
            company
            companySite
          }
        }
      }
    }
  `)
  return site.siteMetadata
}