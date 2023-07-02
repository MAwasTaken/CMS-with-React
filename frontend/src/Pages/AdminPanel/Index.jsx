// react
import React from 'react';
import { Outlet } from 'react-router-dom';

// styles
import './Index.css';

// packages

// components
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar';
import Topbar from '../../components/AdminPanel/Topbar/Topbar';

// admin panel index
function index() {
	// jsx
	return (
		<>
			<div id='content'>
				<Sidebar />
				<div
					id='home'
					className='col-10'>
					<Topbar />
					<div
						className='container-fluid'
						id='home-content'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

// exports
export default index;
