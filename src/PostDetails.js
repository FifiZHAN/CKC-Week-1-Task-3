import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const PostDetails = () => {
    const {id} = useParams()
    const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id)
    const history = useHistory();
    
    const deleting = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }
    
    return ( 
    <div className="post-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error} </div>}
        {post && (
            <article>
                <h2>{post.title}</h2>
                <p>By {post.author} </p>
                <div>{post.body}</div>
                <button onClick={deleting}>Delete</button>
            </article>
        )}
    </div>
);
}
 
export default PostDetails;