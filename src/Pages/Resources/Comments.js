import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentSlice, fetchComments, getAllComments, getCommentError, getCommentStatus } from "../../store/reducers/commentSlice";

const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(getAllComments);
    const commentError = useSelector(getCommentError);
    const commentStatus = useSelector(getCommentStatus);

    useEffect(() => {
        if (commentStatus === "idle") {
            dispatch(fetchComments());
        }
    }, [commentStatus, dispatch]);
    return (
        <div>
            List of Comments
            <div>
                {
                    comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                Comment Name : {comment.name}
                                Comment EMAIL : {comment.email}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Comments;