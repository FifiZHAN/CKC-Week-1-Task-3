import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Postlist = ({posts,title,deleting}) => {

    return ( 
        <div className="List-of-Posts">
            <h2>{title}</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to = {`/blogs/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p> By {post.author} </p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Postlist;