// react
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

// styles
import "./App.css";

// packages

// components

// app
function App() {
	// route
	const router = useRoutes(routes);

	// jsx
	return <div>{router}</div>;
}

// exports
export default App;
