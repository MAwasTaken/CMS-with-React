// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// styles
import './Category.css';

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CourseBox from '../../Components/CourseBox/CourseBox';
import Pagination from '../../Components/Pagination/Pagination';

// category
function Category() {
	// url param
	const { categoryName } = useParams();

	// category courses
	const [courses, setCourses] = useState([]);

	// get category courses
	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses/category/${categoryName}`)
			.then((res) => res.json())
			.then((allCourses) => {
				setCourses(allCourses);
				setOrderedCourses(allCourses);
			});
	}, [categoryName]);

	// paginated courses
	const [shownCourses, setShownCourses] = useState([]);

	// sort status
	const [status, setStatus] = useState('default');

	// sort status title
	const [statusTitle, setStatusTitle] = useState('مرتب سازی پیش فرض');

	// ordered courses
	const [orderedCourses, setOrderedCourses] = useState([]);

	useEffect(() => {
		switch (status) {
			case 'free': {
				const freeCourses = courses.filter((course) => course.price === 0);

				setOrderedCourses(freeCourses);

				break;
			}
			case 'paid': {
				const paidCourses = courses.filter((course) => course.price !== 0);

				setOrderedCourses(paidCourses);

				break;
			}
			case 'last': {
				setOrderedCourses(courses);

				break;
			}
			case 'first': {
				setOrderedCourses([...courses].reverse());

				break;
			}
			default:
				setOrderedCourses(courses);
		}
	}, [status]);

	// course search value
	const [searchValue, setSearchValue] = useState('');

	// course search handler
	const searchValueChangeHandler = (event) => {
		setSearchValue(event.target.value);

		const filteredCourses = courses.filter((course) => course.name.includes(event.target.value));

		console.log(filteredCourses);

		setOrderedCourses(filteredCourses);
	};

	// display type
	const [courseDisplayType, setCourseDisplayType] = useState('row');

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<section className='courses'>
				<div className='container'>
					<div className='courses-content'>
						<div className='container'>
							<div className='row'>
								{courses.length === 0 ? (
									<div className='alert alert-warning'>
										هیچ دوره ای برای این دسته بندی وجود ندارد!
									</div>
								) : (
									<>
										<div className='courses-top-bar'>
											<div className='courses-top-bar__right'>
												<div
													className={`courses-top-bar__row-btn ${
														courseDisplayType === 'row' ? 'courses-top-bar__icon--active' : ''
													}`}
													onClick={() => setCourseDisplayType('row')}>
													<i className='fas fa-border-all courses-top-bar__icon'></i>
												</div>
												<div
													className={`courses-top-bar__row-btn ${
														courseDisplayType === 'col' ? 'courses-top-bar__icon--active' : ''
													}`}
													onClick={() => setCourseDisplayType('col')}>
													<i className='fas fa-align-left courses-top-bar__icon'></i>
												</div>
												<div className='courses-top-bar__selection'>
													<span className='courses-top-bar__selection-title'>
														{statusTitle}
														<i className='fas fa-angle-down courses-top-bar__selection-icon'></i>
													</span>
													<ul className='courses-top-bar__selection-list'>
														<li
															className='courses-top-bar__selection-item courses-top-bar__selection-item--active'
															onClick={() => {
																setStatus('default');
																setStatusTitle('مرتب سازی پیش فرض');
															}}>
															مرتب سازی پیش فرض
														</li>
														<li
															className='courses-top-bar__selection-item'
															onClick={() => {
																setStatus('free');
																setStatusTitle('مرتب سازی بر اساس دوره های رایگان');
															}}>
															مرتب سازی بر اساس دوره های رایگان
														</li>
														<li
															className='courses-top-bar__selection-item'
															onClick={() => {
																setStatus('paid');
																setStatusTitle('مرتب سازی بر اساس دوره های غیر رایگان');
															}}>
															مرتب سازی بر اساس دوره های غیر رایگان
														</li>
														<li
															className='courses-top-bar__selection-item'
															onClick={() => {
																setStatus('last');
																setStatusTitle('مرتب سازی بر اساس آخرین');
															}}>
															مرتب سازی بر اساس آخرین
														</li>
														<li
															className='courses-top-bar__selection-item'
															onClick={() => {
																setStatus('first');
																setStatusTitle('مرتب سازی بر اساس اولین');
															}}>
															مرتب سازی بر اساس اولین
														</li>
													</ul>
												</div>
											</div>
											<div className='courses-top-bar__left'>
												<form
													action='#'
													className='courses-top-bar__form'>
													<input
														type='text'
														className='courses-top-bar__input'
														placeholder='جستجوی دوره ...'
														value={searchValue}
														onChange={searchValueChangeHandler}
													/>
													<i className='fas fa-search courses-top-bar__search-icon'></i>
												</form>
											</div>
										</div>
										{shownCourses.length === 0 ? (
											<div className='alert alert-warning'>
												هیچ دوره ای برای
												{` ${statusTitle} `}
												وجود ندارد!
											</div>
										) : (
											<>
												{courseDisplayType === 'row' ? (
													<>
														{shownCourses.map((course, index) => (
															<CourseBox
																{...course}
																key={index}
															/>
														))}
													</>
												) : (
													<>
														{shownCourses.map((course, index) => (
															<div
																className='col-12'
																key={index}>
																<div className='course-box'>
																	<div className='course__box-header'>
																		<div className='course__box-right'>
																			<a
																				className='course__box-right-link'
																				href='#'>
																				<img
																					src='/images/courses/fareelancer.png'
																					className='course__box-right-img'
																				/>
																			</a>
																		</div>
																		<div className='course__box-left'>
																			<div className='course__box-left-top'>
																				<a
																					href='#'
																					className='course__box-left-link'>
																					{course.name}
																				</a>
																			</div>
																			<div className='course__box-left-center'>
																				<div className='course__box-left-teacher'>
																					<i className='course__box-left-icon fa fa-chalkboard-teacher'></i>
																					<span className='course__box-left-name'>
																						محمد امین سعیدی راد
																					</span>
																				</div>
																				<div className='course__box-left-stars'>
																					<span className='course__box-left-star'>
																						<img src='/images/svgs/star_fill.svg' />
																					</span>
																					<span className='course__box-left-star'>
																						<img src='/images/svgs/star_fill.svg' />
																					</span>
																					<span className='course__box-left-star'>
																						<img src='/images/svgs/star_fill.svg' />
																					</span>
																					<span className='course__box-left-star'>
																						<img src='/images/svgs/star_fill.svg' />
																					</span>
																					<span className='course__box-left-star'>
																						<img src='/images/svgs/star_fill.svg' />
																					</span>
																				</div>
																			</div>
																			<div className='course__box-left-bottom'>
																				<div className='course__box-left-des'>
																					<p>{course.description}</p>
																				</div>
																			</div>
																			<div className='course__box-footer'>
																				<div className='course__box-footer-right'>
																					<i className='course__box-footer-icon fa fa-users'></i>
																					<span className='course__box-footer-count'>202</span>
																				</div>
																				<span className='course__box-footer-left'>
																					{course.price === 0
																						? 'رایگان'
																						: course.price.toLocaleString()}
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														))}
													</>
												)}
											</>
										)}
										<Pagination
											items={orderedCourses}
											itemsCount={3}
											pathName={`/category-info/${categoryName}`}
											setShownItems={setShownCourses}
										/>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Category;
