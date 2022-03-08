import ReactDom from 'react-dom'
import React from "react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/globall.scss';  import 'react-toastify/dist/ReactToastify.css';

ReactDom.render(
    <App/>,
    document.getElementById('root')
);
