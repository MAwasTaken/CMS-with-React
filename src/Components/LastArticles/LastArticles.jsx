// react
import React from "react";

// styles
import "./LastArticles.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

// last articles
function LastArticles() {
	// jsx
	return (
		<div>
			<div class='articles'>
				<div class='container'>
					<div class='articles__header'>
						<SectionHeader title='جدیدترین مقاله ها' description='پیش به سوی ارتقای دانش' btnTitle='تمامی مقاله ها' />
					</div>
					<div class='articles__content'>
						<div class='row'>
							<ArticleBox title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون' description='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...' cover='images/blog/3.jpg' />
							<ArticleBox title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون' description='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...' cover='images/blog/3.jpg' />
							<ArticleBox title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون' description='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...' cover='images/blog/3.jpg' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default LastArticles;
