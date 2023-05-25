// react
import React from "react";

// styles
import "./AboutUsBox.css";

// packages

// components

// about us box
function AboutUsBox({ title, description, icon }) {
	// jsx
	return (
		<div className='col-6'>
			<div className='about-us__box'>
				<div className='about-us__box-right'>
					<i className={icon + " about-us__icon"}></i>
				</div>
				<div className='about-us__box-left'>
					<span className='about-us__box-title'>{title}</span>
					<span className='about-us__box-text'>{description}</span>
				</div>
			</div>
		</div>
	);
}

// exports
export default AboutUsBox;
