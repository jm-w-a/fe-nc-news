import { useEffect, useState } from "react";
import { getArticlesById } from '../../../api'
import { useParams } from 'react-router-dom';

import "../../App.css";

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla culpa eveniet dicta. Et, necessitatibus veritatis sit animi cumque adipisci repellat veniam ipsa dicta modi maiores praesentium cum unde at. Ipsum error fuga recusandae exercitationem expedita dolor facere alias mollitia eveniet nemo, ex impedit reiciendis nihil unde iure amet excepturi voluptas nesciunt voluptate sapiente totam harum illum distinctio. Officiis sed minus placeat? Corporis excepturi nobis ipsum rerum tempore eaque fuga tenetur delectus quos, praesentium sint sed quo. Quaerat adipisci est illo repellat aut beatae nihil ipsum ullam amet. Necessitatibus consectetur repudiandae a architecto deserunt, maxime temporibus quaerat totam nisi ipsam aut corrupti aperiam placeat magnam impedit, doloremque perspiciatis excepturi porro quidem similique amet quae est? Velit, fugit quia quasi voluptas quos delectus, nisi necessitatibus laboriosam odio veritatis expedita dolorem accusamus possimus sapiente quo dolorum ipsum tempora reiciendis soluta. Quas aliquid debitis odio deserunt quia itaque tenetur nisi. Iure, est non mollitia labore placeat asperiores totam eos perspiciatis quaerat eveniet eum ratione reiciendis deleniti minus. Autem repellat voluptatem facere animi reprehenderit ratione saepe. Quasi sunt adipisci unde nesciunt. Nisi repellat earum sit quidem temporibus possimus laboriosam modi adipisci ipsam dignissimos voluptas asperiores provident, in libero cum mollitia. Nobis quis officiis id perferendis, neque ducimus quidem, earum nihil sed cupiditate fuga. Tenetur in dolorem aliquid blanditiis eveniet praesentium eius officiis cum neque maxime alias, recusandae a aperiam? Facere ipsa corporis officia. Eius libero corporis ex maiores, sapiente doloribus provident error cum, incidunt tempore, impedit repellat consequuntur veritatis expedita dignissimos in asperiores quaerat voluptas facere quos. Aliquam delectus quibusdam reprehenderit ea id sit. Eveniet praesentium fugiat reiciendis facere amet reprehenderit atque, illo optio accusamus fugit ratione commodi. Distinctio excepturi mollitia laudantium reiciendis libero facere fugiat deleniti dolores iusto praesentium? Omnis facilis tempore quidem esse unde dolores fugiat saepe voluptatibus, cupiditate doloremque quae dicta in, itaque delectus amet provident minima iure aperiam quo odit vel voluptatem? Impedit magni non atque temporibus porro quisquam libero iusto recusandae quidem optio modi a veniam, labore placeat incidunt deserunt quae explicabo enim. Molestias, ullam ipsam nam ad nihil cupiditate soluta tenetur facilis rerum eaque a recusandae ipsum nostrum placeat repellendus. Amet in consectetur doloremque voluptatum rerum harum, quae ipsum facilis adipisci deserunt! Sit praesentium ex a eveniet earum dolore harum, libero reiciendis excepturi quidem culpa quos magnam accusamus facere consequatur sunt quibusdam minus explicabo id ipsa ad. Maxime ab quae suscipit dolores quis quos, aliquid fugit voluptatum eligendi illo velit, ut ipsa? Error ipsam nobis corrupti delectus praesentium repellat voluptas magnam vero aut nihil architecto fugiat, facere doloribus rem exercitationem sunt, ad, facilis maiores cumque quas cum quia iste placeat? Laborum reprehenderit corrupti ipsam eaque exercitationem praesentium ipsa perspiciatis repellendus odit illo, reiciendis fuga neque necessitatibus sit aut. Quisquam voluptates assumenda ut laudantium aliquid ex explicabo dolorum incidunt magni nam pariatur dolorem dicta quis commodi aliquam nobis deleniti voluptas sunt culpa natus, numquam delectus! Tempore minus accusamus enim explicabo hic magni eos, cum culpa ducimus et velit aut, rerum commodi debitis voluptatum deleniti pariatur. Necessitatibus modi doloribus esse.
      </p>
    </section>
  );
};

export default Article;
