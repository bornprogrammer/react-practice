import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PostDetail = () => {
    const [post, setPost] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((response) => response.json()).then((data) => {
            setPost(data);
        });
    }, [params.id]);
    return (
        <div>
            This is post detail {post.title}
        </div>
    )
};

export default PostDetail;