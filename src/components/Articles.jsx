import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import "../App.css";

const Articles = () => {

    const [topArticles, setTopArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles().then((articles) => {
            setTopArticles(articles);
            setIsLoading(false);
        })
    }, [])

    return (
        <section className="articles">
        <h2>Articles</h2>
        <p>{isLoading ? 'Loading...': null}</p>
        <ul className="articles-list">
            {topArticles.map(({article_id, article_img_url, author, comment_count, created_at, title, topic, votes}) => {
            return (
                <li className="article" key={article_id}>
                    <div className="article-buttons">
                        <button>View Article</button>
                    </div>
                    <div className="article-img">
                        <img src={article_img_url} alt="" />
                    </div>
                    <article className="article-description">
                        <h3>{title}</h3>
                        <br />
                        <p><b>Topic:</b> {topic}</p>
                        <p><b>Author:</b> {author}</p>
                        <p><b>Votes:</b> {votes}</p>
                    </article>
                </li>
            );
            })}
        </ul>
        </section>
    );
};

export default Articles;
