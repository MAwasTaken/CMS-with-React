// react
import React, { useEffect, useState } from 'react';

// styles
import './LastCourses.css';

// packages

// components
import SectionHeader from '../SectionHeader/SectionHeader';
import CourseBox from '../CourseBox/CourseBox';

// last courses
function LastCourses() {
	// all courses
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses`)
			.then((res) => res.json())
			.then((allCourses) => {
				console.log(allCourses);
				setCourses(allCourses);
			});
	}, []);

	console.log(courses);

	// jsx
	return (
		<div className='courses'>
			<div className='container'>
				<SectionHeader
					title='جدیدترین دوره ها'
					description='سکوی پرتاب شما به سمت موفقیت'
					btnTitle='تمامی دوره ها'
					btnHref='courses'
				/>
				<div className='course-content'>
					<div className='container'>
						<div className='row'>
							{courses.splice(0, 6).map((course, index) => (
								<CourseBox
									{...course}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default LastCourses;
