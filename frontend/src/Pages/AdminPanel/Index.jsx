// react
import React from 'react';
import { Outlet } from 'react-router-dom';

// styles

// packages

// components
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar';

// admin panel index
function index() {
  // jsx
	return (
		<>
			<div id='content'>
				<Sidebar />
			</div>
			<Outlet />
		</>
	);
}

// exports
export default index;
