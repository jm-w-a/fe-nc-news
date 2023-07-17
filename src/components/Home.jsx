import { Link } from 'react-router-dom'
import '../App.css'

import Articles from './Articles'
const Home = () => {
  return (
    <main className="home">
      <h1>NC-NEWS</h1>
      <Articles />
    </main>
  );
};

export default Home;
