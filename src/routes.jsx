// components
import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";

// routes
const routes = [
	{ path: "/", element: <Index /> },
	{ path: "/course-info/:courseName", element: <CourseInfo /> },
	{ path: "/category-info/:categoryName", element: <Category /> },
	{ path: "/article-info/:article", element: <ArticleInfo /> },
];

// exports
export default routes;
