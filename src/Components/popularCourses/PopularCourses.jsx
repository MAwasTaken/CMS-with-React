// react
import React from "react";

// styles
import "./PopularCourses.css";

// packages

// components
import SectionHeader from "../SectionHeader/SectionHeader";

// popular courses
function PopularCourses() {
	return (
			<div class='popular'>
				<div class='container'>
					<div class='popular__header'>
						<SectionHeader title='محبوب ترین دوره ها' description='' btnTitle='' />
					</div>
				</div>
			</div>
	);
}

// exports
export default PopularCourses;
