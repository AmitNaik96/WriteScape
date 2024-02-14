import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_BLOG, GET_BLOGS } from "../queries";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario'); 
    const [isPending, setIsPending] = useState(false);
    const [addBlog, { loading, error }] = useMutation(ADD_BLOG);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();   
        addBlog({
            variables: {
              blog: {
                title,
                body,
                author
              }
            },
            refetchQueries: [{ query: GET_BLOGS }]
          })
        
            navigate('/');
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}> 

                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />

                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                 />
                {!isPending && <button>Add Blog</button> }
                {isPending && <button disabled>Adding blog..</button>}
            </form>
        </div>
    );
}

export default Create;