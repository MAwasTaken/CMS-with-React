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
							<div className='course-progress'>
								<div className='course-progress__header'>
									<i className='fas fa-chart-line course-progress__icon'></i>
									<span className='course-progress__title'>درصد پیشرفت دوره: 100%</span>
								</div>
								<div className='progress course-progress__bar'>
									<div
										className='progress-bar progress-bar-striped progress-bar-animated'
										role='progressbar'
										aria-label='Animated striped example'
										aria-valuenow='75'
										aria-valuemin='0'
										aria-valuemax='100'
										style={{ width: '75%' }}></div>
								</div>
							</div>
							<div className='introduction'>
								<div className='introduction__item'>
									<span className='introduction__title title'>
										آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار
									</span>
									<img
										src='/images/info/1.gif'
										alt='course info image'
										className='introduction__img img-fluid'
									/>
									<p className='introduction__text'>
										کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه چندین
										کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به شدت از آن ها
										استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی
										اذیت خواهید شد و حتی ممکن است ناامید شوید!
									</p>
									<p className='introduction__text'>
										در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا اسکریپت به
										صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ مشکلی برای ورود به بازار
										کار نداشته باشید
									</p>
								</div>
								<div className='introduction__item'>
									<span className='introduction__title title'>
										هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)
									</span>
									<img
										src='/images/info/2.jpg'
										alt='course info image'
										className='introduction__img img-fluid'
									/>
									<p className='introduction__text'>
										وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم، از کتابخانه هایی به
										اسم Lodash و Formik استفاده می شد، در حالی که من اولین بارم بود اسم Formik را می
										شنیدم و تا اون موقع از این کتابخانه ها استفاده نکرده بودم.
									</p>
									<p className='introduction__text'>
										همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از مهم ترین مباحثی هستند
										که هر برنامه نویس وب برای ورود به بازار کار و کسب درآمد بهتر، راحت و بیشتر باید
										با آن ها کار کرده باشد{' '}
									</p>
									<p className='introduction__text'>
										همان طور که از اسم این دوره مشخص است، هدف از این دوره آموزش 20 مورد از کاربردی
										ترین و پر استفاده ترین کتابخانه های جاوا اسکریپت است تا شما بتوانید بعد از این
										دوره با قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی وب را ادامه دهید، ری اکت یا
										نود یا … را راحت تر یاد بگیرید و در نهایت وارد بازار کار شده و کسب درآمد کنید.
									</p>
									<p className='introduction__text'>
										شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی کار نکرده باشید، باید
										بلد باشید که چطور باید یک کتابخانه جدید را یاد بگیرید. فرض کنید یک یک کتابخانه
										جدید ساخته شد. آیا شما باید منتظر دوره آموزشی باشید؟! قطعا نه.
									</p>
									<p className='introduction__text'>
										در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه یادگیری یک
										کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا بعد از گذراندن دوره، دیگر
										وابسته هیچ دوره یا شخص خاصی نباشید و اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و
										وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
									</p>
								</div>
								<div className='introduction__btns'>
									<a
										href='#'
										className='introduction__btns-item'>
										دانلود همگانی ویدیوها
									</a>
									<a
										href='#'
										className='introduction__btns-item'>
										دانلود همگانی پیوست‌ها
									</a>
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
