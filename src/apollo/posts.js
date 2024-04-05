import {gql} from "@apollo/client";

export const ALL_POSTS = gql`query posts {
  allPosts {
    id
    title
  }
}

`;

export const UPDATE_POST = gql`mutation posts($title: String!, $id: ID!) {
  updatePost(id: $id, title: $title) {
    id
    title
  }
}
`;
export const ADD_POST = gql`mutation posts($title: String!, $user_id: ID!, $views: Int!) {
  createPost(user_id: $user_id, title: $title, views: $views) {
    user_id
    title
    views
  }
}

`;