import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App";

import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Article from "./components/Article";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="nc-news">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} setIsLoading={setIsLoading} />}
        />
        <Route
          path="/articles/:article_id"
          element={
            <Article isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
