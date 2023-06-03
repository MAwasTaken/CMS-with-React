// react
import React from "react";
import { useRoutes } from "react-router-dom";

// styles
import "./App.css";

// packages

// components
import routes from "./routes";

// app
function App() {
	// route
	const router = useRoutes(routes);

	// jsx
	return <div>{router}</div>;
}

// exports
export default App;
