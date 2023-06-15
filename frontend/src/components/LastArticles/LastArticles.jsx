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
		fetch(`http://localhost:3000/v1/articles`, {
			headers: {
				Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
			},
		})
			.then((res) => res.json())
			.then((allArticles) => {
				console.log(allArticles);
				setArticles(allArticles);
			});
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
						/>
					</div>
					<div className='articles__content'>
						<div className='row'>
							<ArticleBox
								title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'
								description='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'
								cover='images/blog/3.jpg'
							/>
							{articles.slice(0, 5).map((article, index) => (
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
