import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getAllPosts, getPostError, getPostStatus } from "../../store/reducers/postSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getAllPosts);
    const postsStatus = useSelector(getPostStatus);
    const postsError = useSelector(getPostError);

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [postsStatus, dispatch]);
    return (
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            All Postsss
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