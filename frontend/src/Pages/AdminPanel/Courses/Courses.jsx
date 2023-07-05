// react
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';

// styles

// packages
import swal from 'sweetalert';
import { json } from 'react-router-dom';

// components

// admin panel - courses
function Courses() {
	// all courses
	const [courses, setCourses] = useState([]);

	// get all courses
	const getAllCourses = () => {
		fetch(`http://localhost:3000/v1/courses`, {
			headers: {
				Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
			},
		})
			.then((res) => res.json())
			.then((allCourses) => setCourses(allCourses));
	};

	// get all courses when mounting
	useEffect(() => {
		getAllCourses();
	}, []);

	// remove course
	const removeCourse = (courseID) => {
		swal({
			title: 'آیا از حذف دوره اطمینان داری؟',
			icon: 'warning',
			buttons: ['نه', 'آره'],
		}).then((result) => {
			if (result) {
				fetch(`http://localhost:3000/v1/courses/${courseID}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${json.parse(localStorage.getItem('user')).token}`,
					},
				}).then((res) => {
					if (res.ok) {
						swal({
							title: 'دوره مورد نظر با موفقیت حذف شد',
							icon: 'success',
							buttons: 'اوکی',
						}).then(() => getAllCourses());
					} else {
						swal({
							title: 'حذف دوره با مشکل مواجه شد!',
							icon: 'warning',
							buttons: 'اوکی',
						});
					}
				});
			}
		});
	};

	// jsx
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
										onClick={() => removeCourse(course._id)}
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
