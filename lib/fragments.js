import { gql } from "@apollo/client";

export const HOME_DATA = gql`
  fragment HomeData on Page {
    uri
    homeData {
      homeBanner {
        title
        subTitle
        text
        payoff
        link {
          target
          title
          url
        }
        link2 {
          target
          title
          url
        }
        image {
          id
          uri
          altText
          title
          srcSet
          sourceUrl
        }
      }
      pageComponents {
        __typename
        ... on Page_Homedata_PageComponents_ComponentHighlightedProjects {
          title
          subtitle
          projects {
            title
            text
            link {
              target
              title
              url
            }
            githubUrl
            image {
              id
              uri
              altText
              title
              srcSet
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
