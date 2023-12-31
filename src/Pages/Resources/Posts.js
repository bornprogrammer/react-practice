import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPostError, selectPostStatus, selectAllPosts } from "../../store/reducers/postSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(selectPostStatus);
    const postsError = useSelector(selectPostError);

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [postsStatus, dispatch]);
    return (
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            All Posts
            <div>
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <Link to={`${post.id}`}>{post.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Posts;