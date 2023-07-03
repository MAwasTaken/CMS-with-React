// react
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';

// styles

// packages

// components

// admin panel - courses
function Courses() {
	// all courses
	const [courses, setCourses] = useState([]);
	// get all courses
	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses`, {
			headers: {
				Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
			},
		})
			.then((res) => res.json())
			.then((allCourses) => setCourses(allCourses));
	}, []);
	return (
		<>
			<DataTable title=' دوره ها'>
				<table className='table'>
					<thead>
						<tr>
							<th>شناسه</th>
							<th>عنوان</th>
							<th>مبلغ</th>
							<th>وضعیت</th>
							<th>لینک</th>
							<th>مدرس</th>
							<th>دسته بندی</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{course.name}</td>
								<td>{course.price === 0 ? 'رایگان' : course.price.toLocaleString()}</td>
								<td>{course.isComplete === 0 ? 'در حال برگزاری' : 'تکمیل شده'}</td>
								<td>{course.shortName}</td>
								<td>{course.creator}</td>
								<td>{course.categoryID}</td>
								<td>
									<button
										type='button'
										className='btn btn-primary edit-btn'>
										ویرایش
									</button>
								</td>
								<td>
									<button
										type='button'
										className='btn btn-danger delete-btn'>
										حذف
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</DataTable>
		</>
	);
}

export default Courses;
