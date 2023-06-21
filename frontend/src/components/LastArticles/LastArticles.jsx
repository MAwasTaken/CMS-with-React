// react
import React, { useEffect, useState } from 'react';

// styles
import './LastArticles.css';

// packages

// components
import SectionHeader from '../SectionHeader/SectionHeader';
import ArticleBox from '../ArticleBox/ArticleBox';

// last articles
function LastArticles() {
	// articles
	const [articles, setArticles] = useState([]);

	// get last articles
	useEffect(() => {
		fetch(`http://localhost:3000/v1/articles`)
			.then((res) => res.json())
			.then((allArticles) => setArticles(allArticles));
	}, []);

	// jsx
	return (
		<div>
			<div className='articles'>
				<div className='container'>
					<div className='articles__header'>
						<SectionHeader
							title='جدیدترین مقاله ها'
							description='پیش به سوی ارتقای دانش'
							btnTitle='تمامی مقاله ها'
							btnHref='articles/1'
						/>
					</div>
					<div className='articles__content'>
						<div className='row'>
							{articles.slice(0, 6).map((article, index) => (
								<ArticleBox
									{...article}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default LastArticles;
