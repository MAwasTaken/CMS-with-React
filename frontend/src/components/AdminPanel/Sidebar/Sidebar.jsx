// react
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// styles

// packages
import swal from 'sweetalert';

// components

// contexts
import AuthContext from '../../../context/authContext';

// sidebar
function Sidebar() {
	// authorization
	const authContext = useContext(AuthContext);

	// navigator
	const navigate = useNavigate();

	// admin logout
	const logoutAdmin = (event) => {
		event.preventDefault();
		console.log('lol');

		swal({
			title: 'با موفقیت لاگ‌آوت شدید!',
			icon: 'success',
			buttons: 'اوکی',
		}).then(() => {
			authContext.logout();
			navigate('/');
		});
	};

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
					<li>
						<Link to='category'>
							<span>دسته بندی ها</span>
						</Link>
					</li>
					<li>
						<a
							href='#'
							onClick={logoutAdmin}>
							<span>خروج</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

// exports
export default Sidebar;
