import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import './styles/layout.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/bitzup-exchange">
        <App />
    </BrowserRouter>

)
