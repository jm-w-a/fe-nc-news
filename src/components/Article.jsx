import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from '../../api'
import { useParams } from 'react-router-dom';

import "../App.css";

import Comments from './Comments'
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

  const handelVoteOnClick = () => {
    setIsVoteError(false)
    if(hasVoted){
      setArticle((currArticle)=>{
        return {...currArticle, votes: --currArticle.votes}
      })
      patchArticleVotes(article_id, {inc_votes: -1}).catch(()=>{
        console.log('test')
        setHasVoted(true);
        setIsVoteError(true);
        setArticle((currArticle)=>{
          return {...currArticle, votes: ++currArticle.votes}
        })
      })
      setHasVoted(false)
    }else{
      setArticle((currArticle)=>{
        return {...currArticle, votes: ++currArticle.votes}
      })
      patchArticleVotes(article_id, {inc_votes: 1}).catch(()=>{
        console.log('test')
        setHasVoted(false);
        setIsVoteError(true);
        setArticle((currArticle)=>{
          return {...currArticle, votes: --currArticle.votes}
        })
      })
      setHasVoted(true);
    }
  }

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
        <button onClick={handelVoteOnClick}>{!hasVoted ? 'Vote For This Article': 'Undo'}</button>
      </div>
      <p>
        {article.body}
      </p>
      <Comments isLoading={isLoading} setIsLoading={setIsLoading}/>
    </section>
  );
};

export default Article;
