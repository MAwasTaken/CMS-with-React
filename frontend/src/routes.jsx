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
import Search from './Pages/Search/Search';
import AdminPanel from './Pages/AdminPanel/index';
import Users from './Pages/AdminPanel/Users/Users';
import AdminCourses from './Pages/AdminPanel/Courses/Courses';
import AdminMenus from './Pages/AdminPanel/Menus/Menus';
import AdminArticles from './Pages/AdminPanel/Articles/Articles';
import AdminCategory from './Pages/AdminPanel/Category/Category';

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
	{ path: '/search/:value', element: <Search /> },
	{
		path: '/p-admin/*',
		element: <AdminPanel />,
		children: [
			{ path: 'users', element: <Users /> },
			{ path: 'courses', element: <AdminCourses /> },
			{ path: 'menus', element: <AdminMenus /> },
			{ path: 'articles', element: <AdminArticles /> },
			{ path: 'category', element: <AdminCategory /> },
		],
	},
];

// exports
export default routes;
