import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api";

import "../App.css";

function CommentForm({ setPostedComment }) {
    const { article_id } = useParams();
    const [commentBody, setCommentBody] = useState("");
    const [userName, setUserName] = useState("tickle122");

    const postObject = { body: commentBody, username: userName }

    const handleSellSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, postObject).then((returnedComment)=>{
            setPostedComment(returnedComment)
        })
    }

    return (
        <form onSubmit={handleSellSubmit}>
            <label htmlFor="comment-body"></label>
            <input id="comment-body" type="text" name="comment-body" placeholder="Your comment here..." onChange={(event) => { setCommentBody(event.target.value) }}></input>
            <button>Submit</button>
        </form>
    );
}

export default CommentForm;
