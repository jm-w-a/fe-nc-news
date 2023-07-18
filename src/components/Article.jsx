import "../App.css";

const Article = ({ currentArticle }) => {
  const {
    article_id,
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = currentArticle;
  return (
    <section className="current-article">
        <h3>{title}</h3>
        <div className="current-article-img">
            <img src={article_img_url} alt={`Image of ${topic}`} />
        </div>
        <br />
        <p>
            <b>Topic:</b> {topic}
            <br />
            <b>Author:</b> {author}
            <br />
            <b>Votes:</b> {votes}
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet porro cupiditate qui id cum nulla amet ea ratione minus error vitae aperiam, magni quo dicta quasi hic. Repellendus cum totam iusto laboriosam ipsa, quos debitis sed temporibus fugiat maxime eius ut quod natus sint ullam, quae eaque laudantium porro tenetur tempore qui? Architecto ducimus saepe impedit culpa, animi voluptates, nostrum praesentium, doloremque libero temporibus at. Hic fugiat reprehenderit nihil blanditiis culpa repellendus quia molestias a commodi asperiores, assumenda iure sit accusantium ab soluta tenetur tempore quibusdam. Recusandae ipsam natus vitae corrupti cum accusamus pariatur dolorem eius nam itaque cupiditate neque laborum in a harum voluptatum nemo repellat voluptas, officiis dolores! Rerum sunt officiis nam veritatis nihil! Nulla possimus reprehenderit odit autem aut tempore saepe eaque cum sapiente, maiores error sit magnam quae obcaecati, officiis natus similique! Nulla laudantium quis nobis suscipit facilis consequatur, voluptate, dicta laboriosam illo molestias alias. Molestiae vel earum laudantium dicta, quia nobis modi quam ducimus sint quidem, excepturi, sed consequatur ipsam vero ullam exercitationem nihil necessitatibus natus. Quod, architecto? Porro odit quidem, sit, similique nihil iste magnam est architecto, fugiat assumenda quis quos quo deserunt praesentium nulla alias rerum dolor impedit inventore vel vitae repudiandae tenetur? Pariatur numquam non aperiam. Necessitatibus officiis cum illo adipisci voluptate asperiores magni eligendi, maiores saepe obcaecati, eum, animi sit? Rem, quaerat sequi delectus inventore eos eligendi incidunt dicta. Nostrum quia quod hic provident accusamus enim tempora voluptate odio quaerat laudantium modi corporis illo, exercitationem et voluptatem, voluptatibus laboriosam ratione. Corporis mollitia sit veritatis quae? A impedit provident molestias inventore cumque minima harum blanditiis, ab quidem, natus temporibus vitae aut? Illo fugit quas dignissimos dolorem ad modi doloribus praesentium autem dolore obcaecati fugiat minus non cupiditate mollitia eligendi, recusandae necessitatibus assumenda vel rem incidunt asperiores saepe? Impedit, possimus fuga. Aliquid.
        </p>
    </section>
  );
};

export default Article;
