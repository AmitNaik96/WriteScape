import Blog from "../model/Blog.js"

const resolvers = {
    Query : {
        // async/awit bcoz we are connecting to mongoose 
        async blogs() {
            return await Blog.find()
        },
        async blog(_, {ID}){
            return await Blog.findById(ID)
        }, 
    },
    Mutation : {
        async addBlog(_ , args){
            // console.log(args);
            const {title, body, author} = args.blog;
            const blog = await Blog.create({title, body, author});
            return blog;
        },
        async deleteBlog(_, {ID}) {
            const wasDeleted = await Blog.deleteOne({_id : ID})
            if(wasDeleted == 0) return false;
            else return true;
        }
    }
}

export default resolvers;