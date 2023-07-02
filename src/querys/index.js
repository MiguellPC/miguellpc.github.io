import { gql } from '@apollo/client';

export const fetchHygraphQuery = gql`
  query PageInfoQuery($locale: [Locale!]!) {
    hero(where: { slug: "home" }, locales: $locale) {
      introduction
    }
    about(where: { slug: "about" }, locales: $locale) {
      presentation {
        raw
      }
      technologies {
        icon(locales: en) {
          url
        }
        name
      }
      projects(forceParentLocale: true) {
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
