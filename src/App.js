// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './assets/styles.css'
import { Link, Route } from "wouter";
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';



function App() {
  return (
    <div className="App styles">
      <section className="App-content">

        <Link to="/">
          HOME
        </Link>
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/" component={Home} />

      </section>
    </div>
  );
}

export default App;
