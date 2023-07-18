import { useState } from "react";

import "../../App.css";

import Articles from "../Articles";
const Home = ({ setCurrentArticle }) => {
  const [isLoading, setIsLoading] = useState(true);
  
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
