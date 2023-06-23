// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// sidebar
function Sidebar() {
	// jsx
	return (
		<div
			id='sidebar'
			className='col-2'>
			<div className='sidebar-header'>
				<div className='sidebar-logo'>
					<Link to='/'>
						<img
							src='/images/logo/Logo.png'
							alt='Logo'
						/>
					</Link>
				</div>
				<div className='sidebar-menu-btn'>
					<i className='fas fa-bars'></i>
				</div>
			</div>
			<div className='sidebar-menu'>
				<ul>
					<li className='active-menu'>
						<Link to='/p-admin'>
							<span>صفحه اصلی</span>
						</Link>
					</li>
					<li>
						<Link to='courses'>
							<span>دوره ها</span>
						</Link>
					</li>
					<li>
						<Link to='menus'>
							<span>منو ها</span>
						</Link>
					</li>
					<li>
						<Link to='articles'>
							<span>مقاله ها</span>
						</Link>
					</li>
					<li>
						<Link to='users'>
							<span>کاربران</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

// exports
export default Sidebar;
