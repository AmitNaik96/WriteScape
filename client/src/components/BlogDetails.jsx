import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_BLOG, GET_BLOGS, DELETE_BLOG,  } from '../queries';


const BlogDetails = () => {
  const navigate = useNavigate();
  const { ID } = useParams(); // Fetching parameter from the URL
  console.log(ID);
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { ID } // Passing the parameter to the GraphQL query
  });
  const [deleteBlog] = useMutation(DELETE_BLOG); 

  const handleClick = () => {
        deleteBlog({
            variables : { ID },
            refetchQueries: [{ query: GET_BLOGS }]
        })
        .then(() => {
            navigate('/');
        })
        .catch(err => {
            console.error('Error deleting blog :', err);
        })
  };

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <article>
          <h2>{data.blog.title}</h2>
          <p>Written By {data.blog.author}</p>
          <div>{data.blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
