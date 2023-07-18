import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import "../App.css";

const Articles = ({ setCurrentArticle, isLoading, setIsLoading }) => {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setTopArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="articles">
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
              <li className="article" key={article_id}>
                <div className="article-img">
                  <img src={article_img_url} alt={`Image of ${topic}`} />
                </div>
                <article className="article-description">
                  <h3>{title}</h3>
                  <p>
                    <b>Topic:</b> {topic}
                    <br />
                    <b>Author:</b> {author}
                    <br />
                    <b>Votes:</b> {votes}
                  </p>
                  <Link
                    to="articles/currentArticle"
                    onClick={() => {
                      {
                        setCurrentArticle({
                          article_id,
                          article_img_url,
                          author,
                          comment_count,
                          created_at,
                          title,
                          topic,
                          votes,
                        });
                      }
                    }}
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
