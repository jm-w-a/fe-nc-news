import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Article from "./components/Article";
function App() {
  const [currentArticle, setCurrentArticle] = useState({});

  return (
    <div className="nc-news">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCurrentArticle={setCurrentArticle}
            />
          }
        />
        <Route
          path="/articles/currentArticle"
          element={
            <Article
              currentArticle={currentArticle}
            />
          }
        />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
