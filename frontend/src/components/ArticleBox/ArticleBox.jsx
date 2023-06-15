// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './ArticleBox.css';

// packages

// components
import CircleSpinner from '../CircleSpinner/CircleSpinner';

// article box
function ArticleBox({ title, description, cover, shortName }) {
	// image loader
	const [isImgShow, setIsImgShow] = useState(false);

	const onImageLoaded = () => setIsImgShow(true);

	// jsx
	return (
		<div className='col-4'>
			<div className='article-card'>
				<div className='article-card__header'>
					<Link
						to={`/article-info/${shortName}`}
						className='article-card__link-img'>
						{!isImgShow && <CircleSpinner />}
						<img
							src={cover}
							className='article-card__img'
							alt='Article Cover'
							onLoad={onImageLoaded}
						/>
					</Link>
				</div>
				<div className='article-card__content'>
					<Link
						to={`/article-info/${shortName}`}
						className='article-card__link'>
						{title}
					</Link>
					<p className='article-card__text'>{description}</p>
					<Link
						to={`/article-info/${shortName}`}
						className='article-card__btn'>
						بیشتر بخوانید
					</Link>
				</div>
			</div>
		</div>
	);
}

// exports
export default ArticleBox;
