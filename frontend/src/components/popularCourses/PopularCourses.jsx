// react
import React, { useState, useEffect } from 'react';

// styles
import './PopularCourses.css';

// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// components
import SectionHeader from '../SectionHeader/SectionHeader';
import CourseBox from '../CourseBox/CourseBox';

// popular courses
function PopularCourses() {
	// popular courses
	const [popularCourses, setPopularCourses] = useState([]);

	// get popular course
	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses/presell`)
			.then((res) => res.json())
			.then((allPopularCourses) => {
				console.log(allPopularCourses);
				setPopularCourses(allPopularCourses);
			});
	}, []);

	// jsx
	return (
		<div className='popular'>
			<div className='container'>
				<div className='popular__header'>
					<SectionHeader
						title='محبوب ترین دوره ها'
						description=''
						btnTitle=''
					/>
				</div>
				<div className='course-content'>
					<div className='container'>
						<div className='row'>
							<Swiper
								slidesPerView={3}
								spaceBetween={30}
								loop={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								modules={[Autoplay]}
								className='mySwiper'>
								{popularCourses.map((course, index) => (
									<SwiperSlide key={index}>
										<CourseBox
											{...course}
											isSlider={true}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default PopularCourses;
