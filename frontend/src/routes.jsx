// pages
import Index from './Pages/Index/Index';
import CourseInfo from './Pages/CourseInfo/CourseInfo';
import Category from './Pages/Category/Category';
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo';
import Courses from './Pages/Courses/Courses';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Articles from './Pages/Articles/Articles';
import Contact from './Pages/Contact/Contact';

// routes
const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/course-info/:courseName', element: <CourseInfo /> },
	{ path: '/category-info/:categoryName/:page', element: <Category /> },
	{ path: '/article-info/:articleName', element: <ArticleInfo /> },
	{ path: '/courses/:page', element: <Courses /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
	{ path: '/articles/:page', element: <Articles /> },
	{ path: '/contact', element: <Contact /> },
];

// exports
export default routes;
