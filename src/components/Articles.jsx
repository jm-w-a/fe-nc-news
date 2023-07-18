import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";

import "../App.css";

const Articles = ({ isLoading, setIsLoading }) => {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((output) => {
      setTopArticles(output);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="section-articles">
      <h2>Articles</h2>
      <p>{isLoading ? "Loading..." : null}</p>
      <ul className="articles-list">
        {topArticles.map(
          ({
            article_id,
            article_img_url,
            author,
            comment_count,
            created_at,
            title,
            topic,
            votes,
          }) => {
            return (
              <li className="articles-item" key={article_id}>
                <article className="articles-item-description">
                  <h3>{title}</h3>
                  <div className="articles-data">
                    <img src={article_img_url} alt={`${topic}`} />
                    <p>
                      <b>Topic:</b> {topic}
                      <br />
                      <b>Author:</b> {author}
                      <br />
                      <b>Votes:</b> {votes}
                    </p>
                  </div>
                  <Link
                    to={`/articles/${article_id}`}
                  >
                    View Article
                  </Link>
                </article>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Articles;
