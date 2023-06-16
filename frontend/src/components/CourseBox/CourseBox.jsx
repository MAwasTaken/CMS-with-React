// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './CourseBox.css';

// packages

// components
import CircleSpinner from '../CircleSpinner/CircleSpinner';

// course box
function CourseBox(props) {
	// image loader
	const [isImgShow, setIsImgShow] = useState(false);

	const onImageLoaded = () => setIsImgShow(true);

	// console.log(props);

	// jsx
	return (
		<div
			className='col-4'
			style={{ width: `${props.isSlider && '100%'}` }}>
			<div className='course-box'>
				<Link to={`/course-info/${props.shortName}`}>
					{!isImgShow && <CircleSpinner />}
					<img
						src={`/images/courses/${props.cover}`}
						alt='Course img'
						className='course-box__img'
						onLoad={onImageLoaded}
					/>
				</Link>
				<div className='course-box__main'>
					<Link
						to={`course-info/${props.shortName}`}
						className='course-box__title'>
						{props.name}
					</Link>
					<div className='course-box__rating-teacher'>
						<div className='course-box__teacher'>
							<i className='fas fa-chalkboard-teacher course-box__teacher-icon'></i>
							<a
								href='#'
								className='course-box__teacher-link'>
								رضا دولتی
							</a>
						</div>
						<div className='course-box__rating'>
							<img
								src='/images/svgs/star.svg'
								alt='rating'
								className='course-box__star'
							/>
							<img
								src='/images/svgs/star_fill.svg'
								alt='rating'
								className='course-box__star'
							/>
							<img
								src='/images/svgs/star_fill.svg'
								alt='rating'
								className='course-box__star'
							/>
							<img
								src='/images/svgs/star_fill.svg'
								alt='rating'
								className='course-box__star'
							/>
							<img
								src='/images/svgs/star_fill.svg'
								alt='rating'
								className='course-box__star'
							/>
						</div>
					</div>
					<div className='course-box__status'>
						<div className='course-box__users'>
							<i className='fas fa-users course-box__users-icon'></i>
							<span className='course-box__users-text'>500</span>
						</div>
						<span className='course-box__price'>
							{props.price === 0 ? 'رایگان' : props.price.toLocaleString()}
						</span>
					</div>
				</div>
				<div className='course-box__footer'>
					<Link
						to={`/course-info/${props.shortName}`}
						className='course-box__footer-link'>
						مشاهده اطلاعات
						<i className='fas fa-arrow-left course-box__footer-icon'></i>
					</Link>
				</div>
			</div>
		</div>
	);
}

// exports
export default CourseBox;
