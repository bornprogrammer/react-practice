import { useEffect, useState } from "react";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments").then((response) => response.json()).then((data) => {
            setComments(data);
        });
    }, []);
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