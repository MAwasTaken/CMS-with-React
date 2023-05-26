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
		<div class='col-4'>
			<div class='footer-widgets__item'>
				<span class='footer-widgets__title'>{title}</span>
				{children}
			</div>
		</div>
	);
}

// exports
export default FooterItem;
