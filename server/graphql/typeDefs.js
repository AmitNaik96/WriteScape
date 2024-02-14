export const typeDefs = `#graphql
    type Blog {
        _id : ID!
        title : String!
        body : String!
        author : String!
    }
    type Query {
        blogs : [Blog]
        blog(ID : ID!) : Blog
    }
    type Mutation {
        addBlog(blog : AddBlogInput!) : Blog
        deleteBlog(ID : ID!) : Boolean
    }
    input AddBlogInput{
        title : String,
        body : String,
        author : String,
    }
`
