import { useEffect, useState } from "react";
import { getArticleComment } from "../../api";
import { useParams } from "react-router-dom";

import "../App.css";

const Comments = () => {
  const { article_id } = useParams();
  const [currentComments, setCurrentComments] = useState([]);

  useEffect(() => {
    getArticleComment(article_id).then((comments) => {
      setCurrentComments(comments);
    });
  }, [article_id]);

  return (
    <section className="comments">
      <h4>comments</h4>
      <ul>
        {currentComments.map(
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
        )}
      </ul>
    </section>
  );
};

export default Comments;
