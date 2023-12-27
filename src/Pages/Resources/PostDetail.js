import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../store/reducers/postSlice";

const PostDetail = () => {
    const { postId } = useParams();
    const postDetails = useSelector((state) => selectPostById(state, postId));

    // const postDetails = posts.find((post) => post.id === Number(postId));
    return (
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <div>title :  {postDetails.title}</div>
            <div>body :  {postDetails.body}</div>
        </div>
    )
};

export default PostDetail;