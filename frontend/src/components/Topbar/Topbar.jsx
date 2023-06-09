// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Topbar.css';

// packages

// components

// top bar
function Topbar() {
	// top bar menus
	const [allTopBarLinks, setAllTopBarLinks] = useState([]);

	// get top bar menus
	useEffect(() => {
		fetch(`http://localhost:3000/v1/menus/topbar`)
			.then((res) => res.json())
			.then((menus) => setAllTopBarLinks(menus));
	}, []);

	const getRandomItemsFromArray = (array, randomCount) => {
		const shuffled = [...array].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, randomCount);
	};

	// jsx
	return (
		<div className='top-bar'>
			<div className='container-fluid'>
				<div className='top-bar__content'>
					<div className='top-bar__right'>
						<ul className='top-bar__menu'>
							{getRandomItemsFromArray(allTopBarLinks, 6).map((menu, index) => (
								<li
									className='top-bar__item'
									key={index}>
									<Link
										to={menu.href}
										className='top-bar__link'>
										{menu.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='top-bar__left'>
						<div className='top-bar__email'>
							<a
								href='#'
								className='top-bar__email-text top-bar__link'>
								sabzlearn@gmail.com
							</a>
							<i className='fas fa-envelope top-bar__email-icon'></i>
						</div>
						<div className='top-bar__phone'>
							<a
								href='#'
								className='top-bar__phone-text top-bar__link'>
								09921558293
							</a>
							<i className='fas fa-phone top-bar__phone-icon'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default Topbar;
