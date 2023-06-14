// react
import React, { useEffect, useState } from 'react';

// styles
import './Pagination.css';
import { useParams } from 'react-router-dom';

// packages

// components

// pagination
function Pagination({ items, itemsCount, pathName, setShownCourses }) {
	// page url parameters
	const { page } = useParams();

	// page count state
	const [pageCount, setPageCount] = useState(null);

  // pagination logic
	useEffect(() => {
		let endIndex = itemsCount * page;
		let startIndex = endIndex - itemsCount;
		let paginatedItems = items.slice(startIndex, endIndex);

		setShownCourses(paginatedItems);

		let pagesNumber = Math.ceil(items.length / itemsCount);

		setPageCount(pagesNumber);
	}, [page, items]);

	// jsx
	return (
		<div className='courses-pagination'>
			<ul className='courses__pagination-list'>
				<li className='courses__pagination-item'>
					<a
						href='#'
						className='courses__pagination-link'>
						<i className='fas fa-long-arrow-alt-right courses__pagination-icon'></i>
					</a>
				</li>
				<li className='courses__pagination-item'>
					<a
						href='#'
						className='courses__pagination-link'>
						1
					</a>
				</li>
				<li className='courses__pagination-item'>
					<a
						href='#'
						className='courses__pagination-link'>
						2
					</a>
				</li>
				<li className='courses__pagination-item'>
					<a
						href='#'
						className='courses__pagination-link courses__pagination-link--active'>
						3
					</a>
				</li>
				<li className='courses__pagination-item'>
					<a
						href='#'
						className='courses__pagination-link'>
						<i className='fas fa-long-arrow-alt-left courses__pagination-icon'></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

// exports
export default Pagination;
