import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/main.css";
import Home from "./components/View/Home";
import "./components/View/Home.css";

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
);
