// react
import React from "react";

// styles
import "./CourseInfo.css";

// packages

// components
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

// course info
function CourseInfo() {
	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<BreadCrumb
				links={[
					{ id: 1, title: "خانه", to: "/" },
					{ id: 2, title: "آموزش برنامه نویسی فرانت اند", to: "/category-info/frontend" },
					{ id: 3, title: "دوره متخصص جاوا اسکریپت", to: "/course-info/js-expert" },
				]}
			/>
			<Footer />
		</>
	);
}

// exports
export default CourseInfo;
