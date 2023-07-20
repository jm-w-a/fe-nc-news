import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from '../../api'
import { useParams } from 'react-router-dom';

import "../App.css";

import Comments from './Comments'
import ArticleVote from './ArticleVote'
const Article = ({ isLoading, setIsLoading }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoteError, setIsVoteError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <section className="current-article">
      <span>{isLoading ? "Loading..." : null}</span>
      <div className="article-data">
        <h3>{article.title}</h3>
        <span>{isVoteError ? "Something went wrong. Please try again..." : null}</span>
        <p>
          <b>Topic:</b> {article.topic}
          <br />
          <b>Author:</b> {article.author}
          <br />
          <b>Votes:</b> {article.votes}
        </p>
        <ArticleVote setArticle={setArticle} hasVoted={hasVoted} setHasVoted={setHasVoted} isVoteError={isVoteError} setIsVoteError={setIsVoteError}/>
      </div>
      <p>
        {article.body}
      </p>
      <Comments isLoading={isLoading} setIsLoading={setIsLoading}/>
    </section>
  );
};

export default Article;
