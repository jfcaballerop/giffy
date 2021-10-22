// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';


const GIFS = [
  'https://media0.giphy.com/media/pO1H8mAU7geAw/giphy.gif?cid=ecf05e47hxqejkye8s25u10ky3xozvuak8tukb8o638fdczo&rid=giphy.gif&ct=g',
  'https://media2.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47vp98ijkg91ioktlekxp228grntekm0nli0biheib&rid=giphy.gif&ct=g'
];

const DIFFERENTS_GIFS = [
  'https://media4.giphy.com/media/KyBX9ektgXWve/giphy.gif?cid=ecf05e47ywvo1smr5gwusgo9jtkldk0buh4w1cgco19tt7f4&rid=giphy.gif&ct=g',
  'https://media4.giphy.com/media/fAaBpMgGuyf96/giphy.gif?cid=ecf05e47fuewivsu0urbon4m140kbcz24a0ktho4i0a0b1qy&rid=giphy.gif&ct=g'
];

function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect(() => {
    console.log('Effecto exec');
    setGifs(DIFFERENTS_GIFS)
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(aGif => <img src={aGif} />)
        }
        <button onClick={() => setGifs(DIFFERENTS_GIFS)}> CHANGE </button>
      </section>
    </div>
  );
}

export default App;
