// react
import React, { useEffect, useState } from 'react';

// styles

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Footer from '../../Components/Footer/Footer';
import CourseBox from '../../Components/CourseBox/CourseBox';
import Pagination from '../../Components/Pagination/Pagination';

// courses
function Courses() {
	// all courses
	const [allCourses, setCourses] = useState([]);

	// get all courses
	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses`)
			.then((res) => res.json())
			.then((allCourses) => setCourses(allCourses));
	}, []);

	// pagination shown courses
	const [shownCourses, setShownCourse] = useState([]);

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<BreadCrumb
				links={[
					{ id: 1, title: 'خانه', to: '/' },
					{ id: 2, title: 'تمامی دوره ها', to: '/courses' },
				]}
			/>
			<section className='courses'>
				<div className='container'>
					<div className='courses-content'>
						<div className='container'>
							<div className='row'>
								{shownCourses.map((course, index) => (
									<CourseBox
										{...course}
										key={index}
									/>
								))}
							</div>
						</div>
					</div>
					<Pagination
						items={allCourses}
						itemsCount={1}
						pathName='/courses'
						setShownCourses={setShownCourse}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Courses;
