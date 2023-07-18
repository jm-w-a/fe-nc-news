import { Routes, Route } from "react-router-dom";
import "./App";

import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Article from "./components/pages/Article";
function App() {
  return (
    <div className="nc-news">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
