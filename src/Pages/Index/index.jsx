// react
import React from "react";

// styles
import "./Index.css";

// packages

// components
import Header from "../../Components/Header/Header";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";

// index
function index() {
	// jsx
	return (
		<>
			<Header />
			<LastCourses />
			<AboutUs />
		</>
	);
}

// exports
export default index;
