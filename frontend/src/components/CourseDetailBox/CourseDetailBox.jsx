// react
import React from 'react';

// styles
import './CourseDetailBox.css';

// packages

// components

// course detail box
function CourseDetailBox({ title, subTitle, icon }) {
	// jsx
	return (
		<div className='col-4'>
			<div className='course-boxes__box'>
				<div className='course-boxes__box-right'>
					<i className={`course-boxes__box-right-icon ${icon}`}></i>
				</div>
				<div className='course-boxes__box-left'>
					<span className='course-boxes__box-left-title'>{title}</span>
					<span className='course-boxes__box-left--subtitle'>{subTitle}</span>
				</div>
			</div>
		</div>
	);
}

// exports
export default CourseDetailBox;
