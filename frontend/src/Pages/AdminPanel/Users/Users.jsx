// react
import React, { useEffect, useState } from 'react';

// styles

// packages

// components
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';

// admin panel - users
function Users() {
	// users
	const [users, setUsers] = useState([]);

	// get all users
	useEffect(() => {
		const localStorageData = JSON.parse(localStorage.getItem('user'));

		fetch(`http://localhost:3000/v1/users`, {
			headers: {
				Authorization: `Bearer ${localStorageData.token}`,
			},
		})
			.then((res) => res.json())
			.then((allUsers) => {
				console.log(allUsers);
				setUsers(allUsers);
			});
	}, []);

	// jsx
	return (
		<>
			<DataTable title='کاربران'>
				<table class='table'>
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
							<tr>
								<td>{index + 1}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									<button
										type='button'
										class='btn btn-primary edit-btn'>
										ویرایش
									</button>
								</td>
								<td>
									<button
										type='button'
										class='btn btn-warning delete-btn'>
										حذف
									</button>
								</td>
								<td>
									<button
										type='button'
										class='btn btn-danger delete-btn'>
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
