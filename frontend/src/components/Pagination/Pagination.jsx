// react
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// styles
import './Pagination.css';

// packages

// components

// pagination
function Pagination({ items, itemsCount, pathName, setShownCourses }) {
	// page url parameters
	const { page } = useParams();

	// page count state
	const [pagesCount, setPagesCount] = useState(null);

	// pagination logic
	useEffect(() => {
		let endIndex = itemsCount * page;
		let startIndex = endIndex - itemsCount;
		let paginatedItems = items.slice(startIndex, endIndex);

		setShownCourses(paginatedItems);

		let pagesNumber = Math.ceil(items.length / itemsCount);

		setPagesCount(pagesNumber);
	}, [page, items]);

	// jsx
	return (
		<div className='courses-pagination'>
			<ul className='courses__pagination-list'>
				{Number(page) === 1 ? null : (
					<li className='courses__pagination-item'>
						<Link
							to={`/courses/${Number(page) - 1}`}
							className='courses__pagination-link'>
							<i className='fas fa-long-arrow-alt-right courses__pagination-icon'></i>
						</Link>
					</li>
				)}
				{Array(pagesCount)
					.fill(null)
					.map((item, index) => (
						<li
							className='courses__pagination-item'
							key={index}>
							{index + 1 === Number(page) ? (
								<Link
									to={`${pathName}/${index + 1}`}
									className='courses__pagination-link courses__pagination-link--active'>
									{index + 1}
								</Link>
							) : (
								<Link
									to={`${pathName}/${index + 1}`}
									className='courses__pagination-link'>
									{index + 1}
								</Link>
							)}
						</li>
					))}
				{Number(page) === pagesCount ? null : (
					<li className='courses__pagination-item'>
						<Link
							to={`${pathName}/${Number(page) + 1}`}
							className='courses__pagination-link'>
							<i className='fas fa-long-arrow-alt-left courses__pagination-icon'></i>
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}

// exports
export default Pagination;
