// react
import React from 'react';

// styles
import './CourseInfo.css';

// packages

// components
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import CourseDetailBox from '../../Components/CourseDetailBox/CourseDetailBox';

// course info
function CourseInfo() {
	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<BreadCrumb
				links={[
					{ id: 1, title: 'خانه', to: '/' },
					{ id: 2, title: 'آموزش برنامه نویسی فرانت اند', to: '/category-info/frontend' },
					{ id: 3, title: 'دوره متخصص جاوا اسکریپت', to: '/course-info/js-expert' },
				]}
			/>
			<section className='course-info'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<a
								href='#'
								className='course-info__link'>
								آموزش برنامه نویسی فرانت اند
							</a>
							<h1 className='course-info__title'>آموزش 20 کتابخانه جاوااسکریپت برای بازار کار</h1>
							<p className='course-info__text'>
								امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری که حتی
								امروزه هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده سازی نمی کند و
								همیشه از کتابخانه ها و فریمورک های موجود استفاده می کند. پس شما هم اگه میخواید یک
								برنامه نویس عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار استفاده
								می شوند را به خوبی بلد باشید
							</p>
							<div className='course-info__social-media'>
								<a
									href='#'
									className='course-info__social-media-item'>
									<i className='fab fa-telegram-plane course-info__icon'></i>
								</a>
								<a
									href='#'
									className='course-info__social-media-item'>
									<i className='fab fa-twitter course-info__icon'></i>
								</a>
								<a
									href='#'
									className='course-info__social-media-item'>
									<i className='fab fa-facebook-f course-info__icon'></i>
								</a>
							</div>
						</div>

						<div className='col-6'>
							<video
								src=''
								poster='/images/courses/js_project.png'
								className='course-info__video'
								controls></video>
						</div>
					</div>
				</div>
			</section>
			<main className='main'>
				<div className='container'>
					<div className='row'>
						<div className='col-8'>
							<div className='course'>
								<div className='course-boxes'>
									<div className='row'>
										<CourseDetailBox
											title='وضعیت دوره:'
											subTitle='به اتمام رسیده'
											icon='fas fa-graduation-cap'
										/>
										<CourseDetailBox
											title='مدت زمان دوره:'
											subTitle='19 ساعت'
											icon='fas fa-clock'
										/>
										<CourseDetailBox
											title='آخرین بروزرسانی:'
											subTitle='1401/03/02'
											icon='fas fa-calendar-alt'
										/>
										<CourseDetailBox
											title='روش پشتیبانی'
											subTitle='آنلاین'
											icon='fas fa-user-alt'
										/>
										<CourseDetailBox
											title='پیش نیاز:'
											subTitle='HTML CSS'
											icon='fas fa-info-circle'
										/>
										<CourseDetailBox
											title='نوع مشاهده:'
											subTitle='ضبط شده / آنلاین'
											icon='fas fa-play'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

// exports
export default CourseInfo;
