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
// <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>
export default CommentForm;

// "comment_id": 89,
// "body": "Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.",
// "article_id": 1,
// "author": "cooljmessy",
// "votes": 2,
// "created_at": "2020-10-24T07:08:00.000Z"