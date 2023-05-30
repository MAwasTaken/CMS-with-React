// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './SectionHeader.css';

// packages

// components

// section header
function SectionHeader({ title, description, btnTitle, btnHref }) {
	// jsx
	return (
		<div className='courses-header'>
			<div className='courses-header__right'>
				<span className='courses-header__title title'>{title}</span>
				{description.length !== 0 ? (
					<span className='courses-header__text'>{description}</span>
				) : (
					''
				)}
			</div>
			{btnTitle.length !== 0 ? (
				<div className='courses-header__left'>
					<Link
						to={`/${btnHref}`}
						className='courses-header__link'>
						{btnTitle}
						<i className='fas fa-arrow-left courses-header__icon'></i>
					</Link>
				</div>
			) : null}
		</div>
	);
}

// exports
export default SectionHeader;
