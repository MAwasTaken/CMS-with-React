const requiredValue = 'REQUIRED_VALUE';
const minValue = 'MIN_VALUE';
const maxValue = 'MAX_VALUE';
const emailValue = 'EMAIL_VALUE';

const requiredValidator = () => ({
	value: requiredValue,
});

const minValidator = (min) => ({
	value: minValue,
	min,
});

const maxValidator = (max) => ({
	value: maxValue,
	max,
});

const emailValidator = () => ({
	value: emailValue,
});

export { requiredValidator, minValidator, maxValidator, emailValidator };
export default { requiredValue, minValue, maxValue, emailValue };
