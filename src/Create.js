import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Me');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const submits = (e) => {
        e.preventDefault();
        const post = {title,body,author}
        setIsPending(true);
        fetch('http://localhost:8000/posts',{
          method:'POST',
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify(post)
        }).then(() => {
          console.log('New Blog Added');
          setIsPending(false);
          history.push('/');
        })
      }
  
    return (
      <div className="create">
        <h2>Add a Post</h2>
        <form onSubmit={submits}>
          <label>Title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            
          ></textarea>
          <label>Author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="me">me</option>
          </select>
          { !isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    );
  }
   
  export default Create;