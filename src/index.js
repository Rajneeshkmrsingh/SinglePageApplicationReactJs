import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDom from 'react-dom';
import './index.css';
import App from './App.jsx';

ReactDom.render(
<>
<Router>
    <App />
</Router>
</>, document.querySelector("#root"));

