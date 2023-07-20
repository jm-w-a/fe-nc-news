import { useEffect, useState } from "react";
import { getArticleComment } from "../../api";
import { useParams } from "react-router-dom";

import "../App.css";

import CommentForm from "./CommentForm";
const Comments = ({ isLoading, setIsLoading }) => {
  const { article_id } = useParams();
  const [currentComments, setCurrentComments] = useState([]);
  const [isCommentError, setIsCommentError] = useState(false);
  const [postedComment, setPostedComment] = useState({})
  const [postCommentLoading, setPostCommentLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getArticleComment(article_id).then((comments) => {
      if(postedComment.length === 0){
        setCurrentComments(postedComment, ...comments);
        setPostCommentLoading(true);
      } else {
        setCurrentComments(comments);
      }
      setIsLoading(false);
      setPostCommentLoading(false);
    }).catch((err)=>{
      setIsCommentError(true)
    })
  }, [postedComment]);

  return (
    <section className="comments">
      <h4>Comments Section</h4>
      <span>{isLoading ? "Loading..." : null}</span>
      <CommentForm setPostedComment={setPostedComment}/>
      <ul>
        {isCommentError ? (
          <p>Nothing here... Be the first to comment!</p>
        ) : (
          currentComments.map(
            ({ author, body, comment_id, created_at, votes }) => {
              return (
                <li key={comment_id} className="article-comment">
                  <span>{postCommentLoading ? "Loading..." : null}</span>
                  <h5>User: {author}</h5>
                  <p>
                    Comment: {body}
                    <br />
                    <br />
                    Created At: {created_at}
                    <br />
                    <br />
                    Votes: {votes}
                  </p>
                </li>
              );
            }
          )
        )}
      </ul>
    </section>
  );
};

export default Comments;
