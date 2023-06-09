// react
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

// packages

// components

// context
import AuthContext from '../../context/authContext';

// navbar
function Navbar() {
	// authorization context
	const authContext = useContext(AuthContext);

	// all nav bar menus
	const [allMenus, setAllMenus] = useState([]);

	// get and show all menus
	useEffect(() => {
		fetch(`http://localhost:3000/v1/menus`)
			.then((res) => res.json())
			.then((menus) => setAllMenus(menus));
	}, []);

	// jsx
	return (
		<div className='main-header'>
			<div className='container-fluid'>
				<div className='main-header__content'>
					<div className='main-header__right'>
						<img
							src='/images/logo/Logo.png'
							className='main-header__logo'
							alt='لوگوی سبزلرن'
						/>
						<ul className='main-header__menu'>
							<li className='main-header__item'>
								<Link
									to='/'
									className='main-header__link'>
									صفحه اصلی
								</Link>
							</li>
							{allMenus.map((menu, index) => (
								<li
									className='main-header__item'
									key={index}>
									<Link
										to={`/category-info/${menu.href}/1`}
										className='main-header__link'>
										{menu.title}
										{menu.submenus.length !== 0 && (
											<>
												<i className='fas fa-angle-down main-header__link-icon'></i>
												<ul className='main-header__dropdown'>
													{menu.submenus.map((submenu, index) => (
														<li
															className='main-header__dropdown-item'
															key={index}>
															<Link
																to={submenu.href}
																className='main-header__dropdown-link'>
																{submenu.title}
															</Link>
														</li>
													))}
												</ul>
											</>
										)}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='main-header__left'>
						<a
							href='#'
							className='main-header__search-btn'>
							<i className='fas fa-search main-header__search-icon'></i>
						</a>
						<a
							href='#'
							className='main-header__cart-btn'>
							<i className='fas fa-shopping-cart main-header__cart-icon'></i>
						</a>
						{authContext.isLoggedIn ? (
							<Link
								to='/'
								className='main-header__profile'>
								<span className='main-header__profile-text'>
									{authContext.userInfos.name ? authContext.userInfos.name : 'پنل کاربری'}
								</span>
							</Link>
						) : (
							<Link
								to='/login'
								className='main-header__profile'>
								<span className='main-header__profile-text'>ورود / ثبت‌نام</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default Navbar;
