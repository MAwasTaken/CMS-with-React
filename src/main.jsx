// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// styles
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/defaults.css";
import "./styles/helpers.css";

// packages

// components
import App from "./App";

// main
ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

// exports
