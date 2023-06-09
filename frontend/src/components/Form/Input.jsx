// react
import React, { useReducer, useEffect } from 'react';

// styles
import './Input.css';

// packages

// components
import validator from '../../validators/validator';

// input
function Input(props) {
	// change handler
	const inputReducer = (state, action) => {
		switch (action.type) {
			case 'CHANGE': {
				return {
					...state,
					value: action.value,
					isValid: validator(action.value, props.validations),
				};
			}
			default: {
				return state;
			}
		}
	};

	const [mainInput, dispatch] = useReducer(inputReducer, {
		value: '',
		isValid: false,
	});

	const onChangeHandler = (event) =>
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
			isValid: false,
			validation: props.validations,
		});

	const { value, isValid } = mainInput;
	const { id, onInputHandler } = props;

	useEffect(() => {
		onInputHandler(id, value, isValid);
	}, [value]);

	// input element creator
	const element =
		props.element === 'input' ? (
			<input
				className={`${props.className} ${
					mainInput.value === '' ? `null` : mainInput.isValid ? 'success' : 'error'
				}`}
				type={props.type}
				placeholder={props.placeholder}
				onChange={onChangeHandler}
				value={mainInput.value}
			/>
		) : (
			<textarea
				className={props.className}
				placeholder={props.placeholder}
				onChange={onChangeHandler}
				value={mainInput.value}
			/>
		);

	// jsx
	return <div>{element}</div>;
}

// exports
export default Input;
