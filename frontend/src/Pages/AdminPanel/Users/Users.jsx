// react
import React, { useEffect, useState } from 'react';

// styles

// packages
import swal from 'sweetalert';

// components
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';
import Input from '../../../components/Form/Input';
import {
	requiredValidator,
	emailValidator,
	minValidator,
	maxValidator,
} from '../../../validators/rules';
import { useForm } from '../../../hooks/useForms';

// admin panel - users
function Users() {
	// users
	const [users, setUsers] = useState([]);

	// get all users
	function getAllUsers() {
		const localStorageData = JSON.parse(localStorage.getItem('user'));

		fetch(`http://localhost:3000/v1/users`, {
			headers: {
				Authorization: `Bearer ${localStorageData.token}`,
			},
		})
			.then((res) => res.json())
			.then((allUsers) => setUsers(allUsers));
	}

	// get all users when mounting
	useEffect(() => {
		getAllUsers();
	}, []);

	// remove user
	const removeUser = (userID) => {
		swal({
			title: 'آیا از حذف مطمیئنی ؟',
			icon: 'warning',
			buttons: ['نه', 'آره'],
		}).then((res) => {
			if (res)
				fetch(`http://localhost:3000/v1/users/${userID}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
					},
				}).then((res) => {
					if (res.ok) {
						swal({
							title: 'کاربر با موفقیت حذف شد!',
							icon: 'success',
							button: 'باشه',
						}).then(() => getAllUsers());
					}
				});
		});
	};

	// ban user
	const banUser = (userID) => {
		swal({
			title: 'آیا از بن مطمیئنی ؟',
			icon: 'warning',
			buttons: ['نه', 'آره'],
		}).then((res) => {
			if (res)
				fetch(`http://localhost:3000/v1/users/ban/${userID}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
					},
				}).then((res) => {
					if (res.ok) {
						swal({
							title: 'کاربر با موفقیت بن شد!',
							icon: 'success',
							button: 'باشه',
						});
					}
				});
		});
	};

	// form validation
	const [formState, onInputHandler] = useForm({
		name: {
			value: '',
			isValid: false,
		},
		username: {
			value: '',
			isValid: false,
		},
		email: {
			value: '',
			isValid: false,
		},
		phone: {
			value: '',
			isValid: false,
		},
		password: {
			value: '',
			isValid: false,
		},
	});

	// register new user
	const registerNewUser = (event) => {
		event.preventDefault();

		const newUserInfo = {
			name: `${formState.inputs.name.value}`,
			username: formState.inputs.username.value,
			email: formState.inputs.email.value,
			phone: formState.inputs.phone.value,
			password: formState.inputs.password.value,
			confirmPassword: formState.inputs.password.value,
		};

		fetch('http://localhost:3000/v1/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUserInfo),
		})
			.then((res) => res.json())
			.then((result) => getAllUsers());
	};

	// jsx
	return (
		<>
			<div className='home-content-edit'>
				<div className='back-btn'>
					<i className='fas fa-arrow-right'></i>
				</div>
				<form className='form'>
					<div className='col-6'>
						<div className='name input'>
							<label className='input-title'>نام و نام خانوادگی</label>
							<Input
								type='text'
								className=''
								id='name'
								element='input'
								validations={[requiredValidator(), minValidator(8), maxValidator(20)]}
								onInputHandler={onInputHandler}
								placeholder='لطفا نام و نام خانوادگی کاربر را وارد کنید...'
							/>
							<span className='error-message text-danger'></span>
						</div>
					</div>
					<div className='col-6'>
						<div className='family input'>
							<label className='input-title'>نام کاربری</label>
							<Input
								type='text'
								className=''
								id='username'
								element='input'
								validations={[requiredValidator(), minValidator(8), maxValidator(20)]}
								onInputHandler={onInputHandler}
								placeholder='لطفا نام کاربری را وارد کنید...'
							/>
							<span className='error-message text-danger'></span>
						</div>
					</div>
					<div className='col-6'>
						<div className='email input'>
							<label className='input-title'>ایمیل</label>
							<Input
								type='text'
								className=''
								id='email'
								element='input'
								validations={[
									requiredValidator(),
									minValidator(8),
									maxValidator(20),
									emailValidator(),
								]}
								onInputHandler={onInputHandler}
								placeholder='لطفا ایمیل کاربر را وارد کنید...'
							/>
							<span className='error-message text-danger'></span>
						</div>
					</div>
					<div className='col-6'>
						<div className='password input'>
							<label className='input-title'>رمز عبور</label>
							<Input
								type='text'
								className=''
								id='password'
								element='input'
								validations={[requiredValidator(), minValidator(8), maxValidator(20)]}
								onInputHandler={onInputHandler}
								placeholder='لطفا رمز عبور کاربر را وارد کنید...'
							/>
							<span className='error-message text-danger'></span>
						</div>
					</div>
					<div className='col-6'>
						<div className='phone input'>
							<label className='input-title'>شماره تلفن</label>
							<Input
								type='text'
								className=''
								id='phone'
								element='input'
								validations={[requiredValidator(), minValidator(8), maxValidator(20)]}
								onInputHandler={onInputHandler}
								placeholder='لطفا شماره تلفن کاربر را وارد کنید...'
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
									onClick={registerNewUser}
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
			<DataTable title='کاربران'>
				<table className='table'>
					<thead>
						<tr>
							<th>شناسه</th>
							<th>نام و نام خانوادگی</th>
							<th>ایمیل</th>
							<th>ویرایش</th>
							<th>حذف</th>
							<th>بن</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									<button
										type='button'
										className='btn btn-primary edit-btn'>
										ویرایش
									</button>
								</td>
								<td>
									<button
										onClick={() => removeUser(user._id)}
										type='button'
										className='btn btn-warning delete-btn'>
										حذف
									</button>
								</td>
								<td>
									<button
										onClick={() => banUser(user._id)}
										type='button'
										className='btn btn-danger delete-btn'>
										بن
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

export default Users;
