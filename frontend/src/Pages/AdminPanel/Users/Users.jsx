// react
import React, { useEffect, useState } from 'react';

// styles

// packages

// components
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';
import swal from 'sweetalert';

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

	// jsx
	return (
		<>
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
