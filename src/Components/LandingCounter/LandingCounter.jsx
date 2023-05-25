// react
import React, { useState, useEffect } from "react";

// styles

// packages

// components

// landing counter
function LandingCounter({ count, speed }) {
	// states
	const [counter, setCounter] = useState(0);

	// side effects
	useEffect(() => {
		let interval = setInterval(() => setCounter((counter) => counter + 1), speed);

		if (counter === count) clearInterval(interval);

		return () => clearInterval(interval);
	}, [counter]);

	// jsx
	return <span className='landing-status__count'>{counter}</span>;
}

// exports
export default LandingCounter;
