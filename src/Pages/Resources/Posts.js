import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Posts = () => {
    const [posts, setPost] = useState([]);
    // useParams

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => {
            setPost(data);
        });
    }, []);
    return (
        <div>
            All Posts
            <div>
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Posts;