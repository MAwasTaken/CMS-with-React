// react
import React from "react";

// styles
import "./ArticleBox.css";

// packages

// components

// article box
function ArticleBox({title, description, cover}) {
	// jsx
	return (
		<div className='col-4'>
			<div className='article-card'>
				<div className='article-card__header'>
					<a href='#' className='article-card__link-img'>
						<img src={cover} className='article-card__img' alt='Article Cover' />
					</a>
				</div>
				<div className='article-card__content'>
					<a href='#' className='article-card__link'>
            {title}
					</a>
					<p className='article-card__text'>{description}</p>
					<a href='#' className='article-card__btn'>
						بیشتر بخوانید
					</a>
				</div>
			</div>
		</div>
	);
}

// exports
export default ArticleBox;
