// react
import React from "react";

// styles
import "./AboutUs.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

// about us
function AboutUs() {
	// jsx
	return (
		<div className='about-us'>
			<div className='container'>
				<SectionHeader title='ما چه کمکی بهتون میکنیم؟' description='از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست' btnTitle='' />
				<div className='container'>
					<div className='row'>
						<AboutUsBox title='دوره های اختصاصی' description='با پشتیبانی و کیفیت بالا ارائه میده !' icon='far fa-copyright' />
						<AboutUsBox title='اجازه تدریس' description='به هر مدرسی رو نمیده. چون کیفیت براش مهمه !' icon='fas fa-leaf' />
						<AboutUsBox title='دوره پولی و رایگان' description='براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده' icon='fas fa-gem' />
						<AboutUsBox title='اهمیت به کاربر' description='اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست' icon='fas fa-crown' />
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default AboutUs;
