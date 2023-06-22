// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// styles
import './Search.css';

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import CourseBox from '../../Components/CourseBox/CourseBox';
import ArticleBox from '../../Components/ArticleBox/ArticleBox';

// search
function Search() {
	// url params
	const { value } = useParams();

	// search result
	const [allResultCourses, setAllResultCourses] = useState([]);
	const [allResultArticles, setAllResultArticles] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/v1/search/${value}`)
			.then((res) => res.json())
			.then((allData) => {
				setAllResultCourses(allData.setAllResultCourses);
				setAllResultArticles(allData.setAllResultArticles);
			});
	}, []);

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<div className='courses'>
				<div className='container'>
					<SectionHeader
						title='نتیجه دوره ها برای جستجوی شما'
						description='سکوی پرتاب شما به سمت موفقیت'
						btnHref=''
						btnTitle=''
					/>
					{allResultCourses.length === 0 ? (
						<>
							<div className='alert alert-warning'>دوره ای برای جستجوی شما وجود ندارد</div>
						</>
					) : (
						<>
							{allResultCourses.map((course, index) => {
								<CourseBox
									key={index}
									{...course}
								/>;
							})}
						</>
					)}
				</div>
			</div>
			<div className='courses'>
				<div className='container'>
					<SectionHeader
						title='نتیجه مقاله ها برای جستجوی شما'
						description='پیش به سوی ارتقای دانش'
						btnHref=''
						btnTitle=''
					/>
					{allResultCourses.length === 0 ? (
						<>
							<div className='alert alert-warning'>مقاله ای برای جستجوی شما وجود ندارد</div>
						</>
					) : (
						<>
							{allResultArticles.map((article, index) => {
								<ArticleBox
									key={index}
									{...article}
								/>;
							})}
						</>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}

// exports
export default Search;
