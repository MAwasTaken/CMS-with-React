// react
import React, { useEffect, useState } from 'react';

// styles
import './PresellCourses.css';

// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// components
import SectionHeader from '../SectionHeader/SectionHeader';
import CourseBox from '../CourseBox/CourseBox';

// presell courses
function PresellCourses() {
	// presell courses
	const [presellCourses, setPresellCourse] = useState([]);

	// get presell course
	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses/presell`)
			.then((res) => res.json())
			.then((allPreSellCourses) => setPresellCourse(allPreSellCourses));
	}, []);

	// jsx
	return (
		<div className='presell'>
			<div className='container'>
				<div className='presell'>
					<SectionHeader
						title='دوره های پیش فروش'
						description=''
						btnTitle=''
					/>
					<div className='course-content'>
						<div className='container'>
							<div className='row'>
								<Swiper
									slidesPerView={3}
									spaceBetween={30}
									loop={true}
									autoplay={{
										delay: 3500,
										disableOnInteraction: false,
									}}
									modules={[Autoplay]}
									className='mySwiper'>
									{presellCourses.map((course, index) => (
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
		</div>
	);
}

// exports
export default PresellCourses;
