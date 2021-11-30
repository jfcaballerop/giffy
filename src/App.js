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
						<figure className="App-logo">
							<img alt='Giffy logo' src='/logo.png' />
						</figure>
					</Link>
					<GifsContextprovider>
						<Route path="/" component={Home} />
						<Route path="/search/:keyword" component={SearchResults} />
						<Route path="/detail/:id" component={Detail} />
						<Route path="/404" component={() => { return <h1>404 Error</h1> }} />
					</GifsContextprovider>

				</section>
			</div>
		</StaticContext.Provider>
	);
}

export default App;
