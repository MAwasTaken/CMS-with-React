// react
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';

// styles
import './App.css';

// packages

// components
import routes from './routes';

// contexts
import AuthContext from './context/authContext';

// app
function App() {
	// router
	const router = useRoutes(routes);

	// states
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState(false);
	const [userInfos, setUserInfos] = useState(false);

	// login
	const login = (token) => {
		setToken(token);

		localStorage.setItem('user', JSON.stringify({ token }));
	};

	// logout
	const logout = () => {
		setToken(null);

		localStorage.removeItem('user');
	};

	// jsx
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				token,
				userInfos,
				login,
				logout,
			}}>
			{router}
		</AuthContext.Provider>
	);
}

// exports
export default App;
