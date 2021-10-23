// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './assets/styles.css'
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";



function App() {
  return (
    <div className="App styles">
      <section className="App-content">
        <h1>APP</h1>
        <Link to='/gif/matrix'>Matrix</Link>
        <Link to='/gif/pepe'>Pepe</Link>
        <Link to='/gif/españa'>España</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
