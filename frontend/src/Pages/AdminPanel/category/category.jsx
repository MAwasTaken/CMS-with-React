// react
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/AdminPanel/DataTable/DataTable';

// styles

// packages

// components

// category
function category() {
	// all categories
	const [categories, setCategories] = useState([]);

	const getAllCategories = () => {
		fetch(`http://localhost:3000/v1/category`)
			.then((res) => res.json())
			.then((allCategories) => {
				console.log(allCategories);
				setCategories(allCategories);
			});
	};

	useEffect(() => {
		getAllCategories();
	}, []);

	return (
		<>
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
										onClick={() => removeUser(user._id)}
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
