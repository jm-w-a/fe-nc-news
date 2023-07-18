import { useEffect, useState } from "react";
import { getArticlesById } from '../../api'
import { useParams } from 'react-router-dom';

import "../App.css";

const Article = () => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState([]);

  useEffect(() => {
    getArticlesById(article_id).then((article) => {
      setCurrentArticle(article);
    });
  }, [article_id]);

  return (
    <section className="current-article">
      <div className="article-data">
        <h3>{currentArticle.title}</h3>
        <p>
          {currentArticle.topic}
          <br />
          {currentArticle.author}
          <br />
          {currentArticle.votes}
        </p>
      </div>
      <p>
        {currentArticle.body}
      </p>
    </section>
  );
};

export default Article;
