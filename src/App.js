// import logo from './logo.svg';
import React from 'react';
import 'App.css';
import 'assets/styles.css'
import { Link, Route } from "wouter";
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext';
import Detail from 'pages/Detail';
import { GifsContextprovider } from 'context/GifsContext';



function App() {
  return (
    <StaticContext.Provider value={{
      name: 'jf2',
      prueba: true
    }}>
      <div className="App styles">
        <section className="App-content">

          <Link to="/">
            HOME
          </Link>
          <GifsContextprovider>

            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
          </GifsContextprovider>

        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
