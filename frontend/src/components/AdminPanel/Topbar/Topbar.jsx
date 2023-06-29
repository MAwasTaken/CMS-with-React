// react
import React, { useEffect, useState } from 'react';

// styles

// packages

// components

// admin panel top bar
function Topbar() {
	// admin infos
	const [adminInfo, setAdminInfo] = useState({});
	const [adminNotifications, setAdminNotifications] = useState([]);
	const [isShowNotificationBox, setIsShowNotificationBox] = useState(false);

	// get admin infos
	useEffect(() => {
		const localStorageData = JSON.parse(localStorage.getItem('user'));

		fetch(`http://localhost:3000/v1/auth/me`, {
			headers: {
				Authorization: `Bearer ${localStorageData.token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setAdminInfo(data);
				setAdminNotifications(data.notifications);
			});
	}, []);

	// jsx
	return (
		<div className='container-fluid'>
			<div className='container'>
				<div className={`home-header ${isShowNotificationBox && 'active-modal-notification'}`}>
					<div className='home-right'>
						<div className='home-searchbar'>
							<input
								type='text'
								className='search-bar'
								placeholder='جستجو...'
							/>
						</div>
						<div className='home-notification'>
							<button type='button'>
								<i className='far fa-bell'></i>
							</button>
						</div>
						<div
							className='home-notification-modal'
							onMouseEnter={() => setIsShowNotificationBox(true)}
							onMouseLeave={() => setIsShowNotificationBox(false)}>
							<ul className='home-notification-modal-list'>
								{/* {adminNotifications.map((notification) => (
									<li className='home-notification-modal-item'>
										<span className='home-notification-modal-text'>{notification}</span>
										<label className='switch'>
											<a href='javascript:void(0)'>دیدم</a>
										</label>
									</li>
								))} */}
							</ul>
						</div>
					</div>
					<div className='home-left'>
						<div className='home-profile'>
							<div className='home-profile-image'>
								<a href='#'>
									<img
										src={adminInfo.profile}
										alt=''
									/>
								</a>
							</div>
							<div className='home-profile-name'>
								<a href='#'>{adminInfo.name}</a>
							</div>
							<div className='home-profile-icon'>
								<i className='fas fa-angle-down'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default Topbar;
