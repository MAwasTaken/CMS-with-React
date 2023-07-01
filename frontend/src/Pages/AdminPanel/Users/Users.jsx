// react
import React from 'react';

// styles

// packages

// components
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';

// admin panel - users
function Users() {
	// jsx
	return (
		<>
			<DataTable title='کاربران'>
				<table class='table'>
					<thead>
						<tr>
							<th>شناسه</th>
							<th>نام</th>
							<th>نام خانوادگی</th>
							<th>شماره</th>
							<th>ایمیل</th>
							<th>رمز عبور</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>34223</td>
							<td>علی</td>
							<td>سعیدی</td>
							<td>09123443243</td>
							<td>ali@gmail.com</td>
							<td>ehsan1323</td>
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
									class='btn btn-danger delete-btn'>
									حذف
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</DataTable>
		</>
	);
}

export default Users;
