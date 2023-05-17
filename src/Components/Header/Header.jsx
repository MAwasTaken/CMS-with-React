// react
import React from "react";

// styles
import "./Header.css";

// packages

// components
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";

// header
function Header() {
	// jsx
	return (
		<div className="header">
			<Topbar />
			<Navbar />
		</div>
	);
}

// exports
export default Header;
