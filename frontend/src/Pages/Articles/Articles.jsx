// react
import React, { useEffect, useState } from 'react';

// styles
import './Articles.css';

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Footer from '../../Components/Footer/Footer';
import ArticleBox from '../../Components/ArticleBox/ArticleBox';
import Pagination from '../../Components/Pagination/Pagination';

// articles
function Articles() {
	// all articles
	const [articles, setArticles] = useState([]);
	const [shownArticles, setShownArticles] = useState([]);

	// get all articles
	useEffect(() => {
		fetch(`http://localhost:3000/v1/articles`)
			.then((res) => res.json())
			.then((allArticles) => {
				console.log(allArticles);
				setArticles(allArticles);
			});
	}, []);
	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<BreadCrumb
				links={[
					{ id: 1, title: 'خانه', to: '/' },
					{ id: 2, title: 'تمامی مقاله ها', to: '/articles' },
				]}
			/>
			<section className='courses'>
				<div className='container'>
					<div className='courses-content'>
						<div className='container'>
							<div className='row'>
								{shownArticles.map((article, index) => (
									<ArticleBox
										{...article}
										key={index}
									/>
								))}
							</div>
						</div>
					</div>
					<Pagination
						items={articles}
						itemsCount={3}
						pathName='/articles'
						setShownItems={setShownArticles}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Articles;
