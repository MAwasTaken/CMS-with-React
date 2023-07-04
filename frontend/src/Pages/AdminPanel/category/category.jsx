// react
import React, { useEffect, useState } from 'react';

// styles
import './Category.css';

// packages

// components
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';
import Input from '../../../components/Form/Input';
import { minValidator, maxValidator } from '../../../validators/rules';
import { useForm } from '../../../hooks/useForms';
import { json } from 'react-router-dom';
import swal from 'sweetalert';

// category
function category() {
	// all categories
	const [categories, setCategories] = useState([]);

	// get all categories
	const getAllCategories = () => {
		fetch(`http://localhost:3000/v1/category`)
			.then((res) => res.json())
			.then((allCategories) => {
				console.log(allCategories);
				setCategories(allCategories);
			});
	};

	// get all categories when mounting
	useEffect(() => {
		getAllCategories();
	}, []);

	// form authentication
	const [formState, onInputHandler] = useForm({
		title: {
			value: '',
			isValid: false,
		},
		shortname: {
			value: '',
			isValid: false,
		},
	});

	// create new category
	const createNewCategory = (event) => {
		event.preventDefault();

		const newCategoryInfos = {
			title: formState.inputs.title.value,
			shortName: formState.inputs.shortname.value,
		};

		fetch(`http://localhost:3000/v1/category`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCategoryInfos),
		}).then((res) => {
			if (res.ok)
				swal({
					title: 'دسته بندی مورد نظر با موفقیت اضافه شد',
					icon: 'success',
					buttons: 'اوکی',
				}).then(() => getAllCategories());
		});
	};

	// remove category
	const removeCategory = (categoryID) => {
		swal({
			title: 'از حذف دستع بندی مطمئنی؟',
			icon: 'warning',
			buttons: ['نه', 'آره'],
		}).then((result) => {
			if (result) {
				fetch(`http://localhost:3000/v1/category/${categoryID}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
					},
				}).then((res) => {
					if (res.ok) {
						swal({
							title: 'دسته بندی با موفقیت حذف شد',
							icon: 'success',
							buttons: 'حله',
						}).then((res) => getAllCategories());
					}
				});
			}
		});
	};

	// jsx
	return (
		<>
			<div
				className='container-fluid'
				id='home-content'>
				<div className='container'>
					<div className='home-title'>
						<span>افزودن دسته‌بندی جدید</span>
					</div>
					<form className='form'>
						<div className='col-6'>
							<div className='name input'>
								<label className='input-title'>عنوان</label>
								<Input
									element='input'
									onInputHandler={onInputHandler}
									type='text'
									id='title'
									placeholder='لطفا عنوان را وارد کنید...'
									validations={[minValidator(5), maxValidator(20)]}
								/>
								<span className='error-message text-danger'></span>
							</div>
						</div>
						<div className='col-6'>
							<div className='name input'>
								<label className='input-title'>اسم کوتاه</label>
								<Input
									element='input'
									onInputHandler={onInputHandler}
									type='text'
									id='shortname'
									placeholder='لطفا اسم کوتاه را وارد کنید...'
									validations={[minValidator(5), maxValidator(20)]}
								/>
								<span className='error-message text-danger'></span>
							</div>
						</div>
						<div className='col-12'>
							<div className='bottom-form'>
								<div className='submit-btn'>
									<input
										type='submit'
										value='افزودن'
										onClick={createNewCategory}
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<DataTable title='دسته‌بندی‌ها'>
				<table className='table'>
					<thead>
						<tr>
							<th>شناسه</th>
							<th>عنوان</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
					</thead>
					<tbody>
						{categories.map((category, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{category.title}</td>
								<td>
									<button
										type='button'
										className='btn btn-primary edit-btn'>
										ویرایش
									</button>
								</td>
								<td>
									<button
										onClick={() => removeCategory(category._id)}
										type='button'
										className='btn btn-warning delete-btn'>
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

export default category;
