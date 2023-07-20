import { useEffect, useState } from "react";
import { getArticleComment } from "../../api";
import { useParams } from "react-router-dom";

import "../App.css";

const Comments = ({ isLoading, setIsLoading }) => {
  const { article_id } = useParams();
  const [currentComments, setCurrentComments] = useState([]);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getArticleComment(article_id).then((comments) => {
      setCurrentComments(comments);
      setIsLoading(false);
    }).catch((err)=>{
        setIsError(true)
    })
  }, [article_id]);

  return (
    <section className="comments">
      <h4>comments</h4>
      <span>{isLoading ? "Loading..." : null}</span>
      <ul>
        {isError ? (
          <p>Nothing here... Be the first to comment!</p>
        ) : (
          currentComments.map(
            ({ author, body, comment_id, created_at, votes }) => {
              return (
                <li key={comment_id} className="article-comment">
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
