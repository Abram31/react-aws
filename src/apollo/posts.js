import {gql} from "@apollo/client";

export const ALL_POSTS = gql`query posts {
  allPosts {
    id
    title
  }
}

`;