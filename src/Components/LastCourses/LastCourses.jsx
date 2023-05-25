// react
import React from "react";

// styles
import "./LastCourses.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

// last courses
function LastCourses() {
	// jsx
	return (
		<div className='courses'>
			<div className='container'>
				<SectionHeader title='جدیدترین دوره ها' description='سکوی پرتاپ شما به سمت موفقیت' btnTitle='همه دوره ها' />
				<div className='course-content'>
					<div className='container'>
						<div className='row'>
							<CourseBox />
							<CourseBox />
							<CourseBox />
							<CourseBox />
							<CourseBox />
							<CourseBox />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default LastCourses;
