import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import './app1.css';*/
//import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
//import EventCount from'./EventCount'
//import MyApp1 from './MyApp1.js'
//import EventH from './EventH.js'
//import Calculator from './Calculator.js'
/*ReactDOM.render( < App / > , document.getElementById('root'));*/
//import Conditional1 from './conditional1'
//import Cd from './Cd.js'
//import Loading from './loading'
//import Forms2 from './forms2'
//import Navigation from './Navigation.js'
//import MainApp from './MainApp.js'
import Main from './Main.js'
const loader = document.querySelector(".loader-container");
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });

  return (
    <div className="App">
        <Main/>
    </div>
  );
}

ReactDOM.render( <App hideLoader={hideLoader} showLoader={showLoader}  /> , document.getElementById("root"))
serviceWorker.unregister();
