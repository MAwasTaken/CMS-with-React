const testEmail = (value) => {
	const emailPattern = /^([A-Za-z0-9])+@([A-Za-z])+\.([a-zA-Z]){2,3}$/g;

	return emailPattern.test(value);
};

export { testEmail };
