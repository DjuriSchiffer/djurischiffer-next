import { gql } from '@apollo/client';

const linkFragment = `
link {
    target
     title
     url 
 }
`;

const imageFragment = `
image {
    id
    uri
    altText
    title
    srcSet
    sourceUrl
 }
`;

export const pageComponents = ` 
pageComponents {
    __typename
    ... on Page_Homedata_PageComponents_ComponentHighlightedProjects {
      title
      subtitle
      projects {
        title
        text
        ${linkFragment}
        githubUrl
        ${imageFragment}
      }
    }
  }`;

export const homeData = `gql
... on Page {
    homeData {
        homeBanner {
            title
            subTitle
            payoff
            ${linkFragment}
            link2 {
                target
                title
                url
            }
            ${imageFragment}
        }
        ${pageComponents}
    }
}
`;

export const HOME_DATA = gql`
fragment HomeData on Page {
    uri
    homeData {
      homeBanner {
        title
        subTitle
        text
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