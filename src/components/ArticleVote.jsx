import { useState } from "react";
import { patchArticleVotes } from '../../api'
import { useParams } from 'react-router-dom';

import "../App.css";

const ArticleVote = ({ setArticle, hasVoted, setHasVoted, isVoteError, setIsVoteError }) => {
  const { article_id } = useParams();

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
    <button onClick={handelVoteOnClick}>{!hasVoted ? 'Vote For This Article': 'Undo'}</button>
  );
};

export default ArticleVote;
