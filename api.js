import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://be-news-cpa9.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsApi.get(`/articles/`).then((res) => {
    const output = res.data.articles;
    return output;
  });
};
export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    const output = res.data.article;
    return output;
  });
};
export const getArticleComment = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    const output = res.data.comments;
    return output;
  });
};
export const patchArticleVotes = (article_id, updatedValue) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, updatedValue)
};
