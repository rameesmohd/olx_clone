import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from './store/Context.jsx';
import { firebase,db } from "./firebase/config.js";
import Context from './store/Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase,db}}>
      <Context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
)
