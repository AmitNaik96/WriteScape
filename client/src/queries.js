import { gql } from '@apollo/client';

export const GET_BLOG = gql`
  query getBlog($ID: ID!) {
    blog(ID: $ID) {
      title
      body
      author
    }
  }
`;

export const GET_BLOGS = gql`
  query getBlogs {
    blogs {
      _id
      title
      body
      author
    }
  }
`;


export const ADD_BLOG = gql`
mutation AddBlog ($blog : AddBlogInput!){
  addBlog(blog : $blog){
    title,
    body,
    author
  }
}
`;

export const DELETE_BLOG = gql`
mutation deleteBlog($ID : ID!) {
  deleteBlog(ID : $ID)
}
`