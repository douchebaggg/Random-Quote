import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react';
import RandomBg from './RandomBG.js';


function App() {
const [quoteInfo, setQuote] = useState({});
//const [color, generateColor] = useState({});

//API
useEffect(() => {
RandomQuote(); 
}, []);
  
const RandomQuote = () => {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
      setQuote({
        text: data.content,
        author: data.author,
      });
      console.log(data);

    });
};
// end of API
const { color, generateColor }
= RandomBg();

  return   ( <body id = "wrap" style={{backgroundColor: "#" + color, height: "100vh", width: "100vw",transition:" background-color 0.5s ease-in"}}>
  <div id="quote-box">
    <p id="text" style={{color: "#"+ color, transition:" color 0.5s ease-in"}}>{quoteInfo.text}</p>
    <p id="author" style={{color: "#"+ color, transition:" color 0.5s ease-in"}}>{quoteInfo.author}</p>
    <a 
          href= {'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text}
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
  
    ><button id = "twitter" style={{backgroundColor: "#" + color }}><FontAwesomeIcon icon={ faTwitter} /></button>
    </a>

    <a id = "facebook-post" title="Post this quote!" target="_top" href='{https://facebook.com}'> 
    <button id="facebook"  style={{backgroundColor: "#" + color }} ><FontAwesomeIcon icon={ faFacebook} /></button>


    </a>
    <button id ="new-quote" onClick={() => {
    RandomQuote(); generateColor();
  }} style={{backgroundColor: "#" + color }}  > New Quote </button>
  </div>
  </body>
  )

  
}

export default App;
