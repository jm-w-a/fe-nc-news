import axios from "axios"

const ncNewsApi = axios.create ({
    baseURL: "https://be-news-cpa9.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get(`/articles`).then((res) => {
        const articles = res.data.articles
        return articles
    })
}