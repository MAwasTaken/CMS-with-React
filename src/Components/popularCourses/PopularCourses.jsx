// react
import React from "react";

// styles
import "./PopularCourses.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";

// popular courses
function PopularCourses() {
  // jsx
	return (
			<div className='popular'>
				<div className='container'>
					<div className='popular__header'>
						<SectionHeader title='محبوب ترین دوره ها' description='' btnTitle='' />
					</div>
				</div>
			</div>
	);
}

// exports
export default PopularCourses;
