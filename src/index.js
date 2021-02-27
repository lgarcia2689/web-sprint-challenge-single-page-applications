import React from "react";
import { render } from 'react-dom'
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom'

render(
    // Wrap the <App /> in a provider
    <Router>
      <App />
    </Router>
    , document.querySelector('#root')
  )
  
