// react
import React from 'react';

// styles
import './Input.css';

// packages

// components

// input
function Input(props) {
	const element =
		props.element === 'input' ? (
			<input
				className={props.className}
				type={props.type}
				placeholder={props.placeholder}
			/>
		) : (
			<textarea
				className={props.className}
				placeholder={props.placeholder}
			/>
		);
	// jsx
	return <div>{element}</div>;
}

// exports
export default Input;
