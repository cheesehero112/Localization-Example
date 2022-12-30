import { useState } from 'react';
import './App.css';
import { localize } from './Translation';

function App() {
  // set current language
  const [lang, setLang] = useState(() => 'en');

  return (
    <div className='App'>
      <div>
        <img
          src='../src/assets/earth-lg.png'
          className='logo'
          alt='earth logo'
        />
      </div>
      <h1>{localize(lang, 'title')}</h1>
      <h3>{localize(lang, 'hello')}</h3>
      <h3 className='flag'>{localize(lang, 'icon')}</h3>
      <div className='card'>
        <button
          onClick={(e) => {
            // call setLang with the className 'en' when button is clicked
            setLang(e.target.className);
          }}
          className='en'
        >
          Choose English
        </button>
        <button
          onClick={(e) => {
            // call setLang with the className 'es' when button is clicked
            setLang(e.target.className);
          }}
          className='es'
        >
          Elige Español
        </button>
        <button
          onClick={(e) => {
            // call setLang with the className 'jp' when button is clicked
            setLang(e.target.className);
          }}
          className='jp'
        >
          日本語を選ぶ
        </button>
        <p>{localize(lang, 'currentLang')}</p>
      </div>
      <footer>Created by Chihiro Snider @2022</footer>
    </div>
  );
}

export default App;
