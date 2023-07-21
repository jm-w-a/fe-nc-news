import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api";

import "../App.css";

function CommentForm({ setPostedComment }) {
  const { article_id } = useParams();
  const [commentBody, setCommentBody] = useState("");
  const [userName, setUserName] = useState("tickle122");
  const [isCommentDisable, setIsCommentDisabled] = useState(false);
  const [isCommentError, setIsCommentError] = useState(false)

  const postObject = { body: commentBody, username: userName };

  const handleSellSubmit = (event) => {
    event.preventDefault();
    setIsCommentDisabled(true);
    postComment(article_id, postObject).then((returnedComment) => {
      setIsCommentError(false)
        if(returnedComment){
            setPostedComment(returnedComment)
        }
      }).catch((err)=>{
        setIsCommentError(true)
      });
    setCommentBody('');
    setIsCommentDisabled(false);
  };

  return (
    <form onSubmit={handleSellSubmit}>
      <span className="red-error">{isCommentError ? 'Cannot process your request, please try again...': null}</span>
      <label htmlFor="comment-body"></label>
      <textarea
        value={commentBody}
        rows={5}
        cols={33}
        required
        id="comment-body"
        type="text"
        name="comment-body"
        placeholder="Your comment here..."
        onChange={(event) => {
          setCommentBody(event.target.value);
        }}
      ></textarea>
      <button disabled={isCommentDisable}>Submit</button>
    </form>
  );
}

export default CommentForm;
