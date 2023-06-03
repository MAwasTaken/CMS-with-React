// react
import React from "react";

// styles
import "./FooterItem.css";

// packages

// components

// footer item
function FooterItem({ title, children }) {
	// jsx
	return (
		<div className='col-4'>
			<div className='footer-widgets__item'>
				<span className='footer-widgets__title'>{title}</span>
				{children}
			</div>
		</div>
	);
}

// exports
export default FooterItem;
