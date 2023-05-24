// react
import React from "react";

// styles
import "./LastCourses.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";

// header
function LastCourses() {
	// jsx
	return (
		<div className='courses'>
			<div className='container'>
				<SectionHeader title='جدیدترین دوره ها' description='سکوی پرتاپ شما به سمت موفقیت' btnTitle='همه دوره ها' />
			</div>
		</div>
	);
}

// exports
export default LastCourses;
