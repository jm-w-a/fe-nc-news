import { useEffect, useState } from "react";
import { getArticleById } from '../../api'
import { useParams } from 'react-router-dom';

import "../App.css";

import Comments from './Comments'
const Article = ({ isLoading, setIsLoading }) => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setCurrentArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <section className="current-article">
      <span>{isLoading ? "Loading..." : null}</span>
      <div className="article-data">
        <h3>{currentArticle.title}</h3>
        <p>
          <b>Topic:</b> {currentArticle.topic}
          <br />
          <b>Author:</b> {currentArticle.author}
          <br />
          <b>Votes:</b> {currentArticle.votes}
        </p>
      </div>
      <p>
        {currentArticle.body}
      </p>
      <Comments isLoading={isLoading} setIsLoading={setIsLoading}/>
    </section>
  );
};

export default Article;
