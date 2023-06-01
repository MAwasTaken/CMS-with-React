// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// button
function Button(props) {
	if (props.to)
		return (
			<Link
				className={props.className}
				to={props.to}>
				{props.children}
			</Link>
		);
	else if (props.href)
		return (
			<a
				href={props.href}
				className={props.className}>
				{props.children}
			</a>
		);
	else
		return (
			<button
				className={props.className}
				type={props.type}
				onClick={props.onClick}
				disabled={props.disabled}>
				{props.children}
			</button>
		);
}

// exports
export default Button;
