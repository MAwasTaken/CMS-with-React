// react
import React from "react";

// styles
import "./Index.css";

// packages

// components
import Header from "../../Components/Header/Header";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/popularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import LastArticles from "../../Components/LastArticles/LastArticles";

// index
function index() {
	// jsx
	return (
		<>
			<Header />
			<LastCourses />
			<AboutUs />
			<PopularCourses />
			<PresellCourses />
			<LastArticles />
		</>
	);
}

// exports
export default index;
