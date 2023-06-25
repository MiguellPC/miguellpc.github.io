import { gql } from '@apollo/client';

export const fetchHygraphQuery = gql`
  query PageInfoQuery {
    hero(where: { slug: "home" }) {
      introduction
    }
    about(where: { slug: "about" }) {
      presentation {
        raw
      }
      technologies {
        icon {
          url
        }
        name
      }
      projects {
        name
        image {
          url
        }
        description
        tag {
          tagName
          tagColor
        }
        sourceCodeLink
        liveVersionLink
      }
    }
  }
`;
