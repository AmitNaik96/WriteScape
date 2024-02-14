import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import { GET_BLOGS } from "../queries";


const BlogList = ( { title } ) => {  
    const { loading, error, data } = useQuery(GET_BLOGS);

    return (
        <div className="blog-list">
            {error && <div>{ error }</div>} 
            { loading && <div>Loading..</div> } 
            <h2> { title } </h2>
            {data &&   (data.blogs.map((blog) => (
                <div className="blog-preview" key = {blog._id}>
                    {console.log(blog._id)}
                    <Link to = {"/blogs/" + blog._id}>
                        <h2> { blog.title } </h2>
                        <p> Written by { blog.author }</p>
                    </Link>

                </div>
            )))}
        </div>
    );
}

export default BlogList