import Postlist from "./Postlist";
import useFetch from "./useFetch";


const Home = () => {
    const { data: posts, isPending, error} = useFetch('http://localhost:8000/posts')

    // const deleting = (id) =>{
    //     const newPosts = posts.filter(post => post.id !== id);
    //     setPosts(newPosts);
    // }


    return (
        <div className="home">
            { error && <div>{ error }</div> } 
            { isPending && <div>Loading...</div> }
            {posts && <Postlist posts={posts} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;