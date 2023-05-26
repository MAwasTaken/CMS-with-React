// react
import React from "react";

// styles
import "./LastArticles.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";

// last articles
function LastArticles() {
	return (
		<div>
			<div class='articles'>
				<div class='container'>
					<div class='articles__header'>
						<SectionHeader title='جدیدترین مقاله ها' description='پیش به سوی ارتقای دانش' btnTitle='تمامی مقاله ها' />
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default LastArticles;
