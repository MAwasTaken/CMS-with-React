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
				console.log(data);
				setAdminInfo(data);
				setAdminNotifications(data.notifications);
			});
	}, []);

	// see notification
	function seenNotification(NotificationId) {
		const localStorageData = JSON.parse(localStorage.getItem('user'));

		fetch(`http://localhost:3000/v1/notifications/${NotificationId}`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${localStorageData.token}`,
			},
		});
	}

	// jsx
	return (
		<div className='container-fluid'>
			<div className='container'>
				<div className={`home-header ${isShowNotificationBox && 'active-modal-notfication'}`}>
					<div className='home-right'>
						<div className='home-searchbar'>
							<input
								type='text'
								className='search-bar'
								placeholder='جستجو...'
							/>
						</div>
						<div
							className='home-notification'
							onMouseEnter={() => setIsShowNotificationBox(true)}>
							<button type='button'>
								<i className='far fa-bell'></i>
							</button>
						</div>
						<div
							className='home-notification-modal'
							onMouseEnter={() => setIsShowNotificationBox(true)}
							onMouseLeave={() => setIsShowNotificationBox(false)}>
							<ul className='home-notification-modal-list'>
								{adminNotifications.length === 0 ? (
									<li className='home-notification-modal-item'>
										نوتیفیکیشنی برای نمایش وجود ندارد!
									</li>
								) : (
									adminNotifications.map((notification, index) => (
										<li
											className='home-notification-modal-item'
											key={index}>
											<span className='home-notification-modal-text'>{notification.msg}</span>
											<label className='switch'>
												<span onClick={() => seenNotification(notification._id)}>دیدم</span>
											</label>
										</li>
									))
								)}
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
