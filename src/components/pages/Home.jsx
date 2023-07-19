import "../../App.css";

import Articles from "../Articles";
const Home = ({ setCurrentArticle, isLoading, setIsLoading }) => {
  return (
    <main className="home">
      <h1>NC-NEWS</h1>
      <Articles
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </main>
  );
};

export default Home;
