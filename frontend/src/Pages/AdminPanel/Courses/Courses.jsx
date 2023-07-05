// react
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';

// styles
import './Courses.css'

// packages
import swal from 'sweetalert';
import { json } from 'react-router-dom';

// components

// admin panel - courses
function Courses() {
	// all courses
	const [courses, setCourses] = useState([]);

	// all categories
	const [categories, setCategories] = useState([]);

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

		// get all categories when mounting
		fetch(`http://localhost:3000/v1/category`)
			.then((res) => res.json())
			.then((allCategories) => {
				setCategories(allCategories);
			});
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

	// select category
	const selectCategory = (event) => {
		setCourseCategory(event.target.value);
	};

	// jsx
	return (
		<>
			<div
				class='container-fluid'
				id='home-content'>
				<div class='container'>
					<div class='home-title'>
						<span>افزودن محصول جدید</span>
					</div>
					<form class='form'>
						<div class='col-6'>
							<div class='name input'>
								<label class='input-title'>نام محصول</label>
								<input
									type='text'
									isValid='false'
									placeholder='لطفا نام محصول را وارد کنید...'
								/>
								<span class='error-message text-danger'></span>
							</div>
						</div>
						<div class='col-6'>
							<div class='price input'>
								<label class='input-title'>قیمت محصول</label>
								<input
									type='text'
									isValid='false'
									placeholder='لطفا قیمت محصول را وارد کنید...'
								/>
								<span class='error-message text-danger'></span>
							</div>
						</div>
						<div class='col-6'>
							<div class='number input'>
								<label class='input-title'>تعداد محصول</label>
								<input
									type='text'
									isValid='false'
									placeholder='لطفا تعداد محصول را وارد کنید...'
								/>
								<span class='error-message text-danger'></span>
							</div>
						</div>
						<div class='col-6'>
							<div class='price input'>
								<label class='input-title'>قیمت محصول</label>
								<input
									type='text'
									isValid='false'
									placeholder='لطفا قیمت محصول را وارد کنید...'
								/>
								<span class='error-message text-danger'></span>
							</div>
						</div>
						<div class='col-6'>
							<div class='number input'>
								<label class='input-title'>دسته‌بندی دوره</label>
								<select onChange={selectCategory}>
									{categories.map((category) => (
										<option value={category._id}>{category.title}</option>
									))}
								</select>
								<span class='error-message text-danger'></span>
							</div>
						</div>
						<div class='col-6'>
							<div class='file'>
								<label class='input-title'>عکس محصول</label>
								<input
									type='file'
									id='file'
								/>
							</div>
						</div>
						<div class='col-12'>
							<div class='bottom-form'>
								<div class='condition'>
									<label class='input-title'>موجودی</label>
									<div class='radios'>
										<div class='available'>
											<label>
												<span>موجود</span>
												<input
													type='radio'
													value='avalibe'
													name='condition'
													checked
												/>
											</label>
										</div>
										<div class='unavailable'>
											<label>
												<span>ناموجود</span>
												<input
													type='radio'
													value='unavailable'
													name='condition'
												/>
											</label>
										</div>
									</div>
								</div>
								<div class='submit-btn'>
									<input
										type='submit'
										value='افزودن'
									/>
								</div>
							</div>
						</div>
						<div class='col-6'>
							<div class='presell'>
								<label class='input-title'>وضعیت دوره</label>
								<div class='radios'>
									<div class='presell-true'>
										<label>
											<span>پیش فروش</span>
											<input
												type='radio'
												value='presell'
												name='presell'
												checked
											/>
										</label>
									</div>
									<div class='presell-false'>
										<label>
											<span>در حال برگزاری</span>
											<input
												type='radio'
												value='onperforming'
												name='presell'
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
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
