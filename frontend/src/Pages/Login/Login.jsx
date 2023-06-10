// react
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Login.css';

// packages
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { maxValidator, minValidator, requiredValidator } from '../../validators/rules';

// hooks
import { useForm } from '../../hooks/useForms';

// context
import AuthContext from '../../context/authContext';

// login
function Login() {
	// authorization context
	const authContext = useContext(AuthContext);

	// form validation
	const [formState, onInputHandler] = useForm(
		{
			username: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	// user login
	const userLogin = (event) => {
		event.preventDefault();

		const userData = {
			identifier: formState.inputs.username.value,
			password: formState.inputs.password.value,
		};

		fetch(`http://localhost:3000/v1/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})
			.then((res) => {
				if (!res.ok) {
					return res.text().then((text) => {
						throw new Error(text);
					});
				} else {
					return res.json();
				}
			})
			.then((result) => {
				authContext.login({}, result.accessToken);
				swal({
					title: 'با موفقیت وارد شدید',
					icon: 'success',
					buttons: 'ورود به پنل کاربری',
				}).then((value) => {
					location.href = '/';
				});
			})
			.catch((err) => {
				console.log(`err => ${err}`);
				swal({
					title: 'همچین کاربری وجود ندارد',
					icon: 'error',
					buttons: 'تلاش دوباره',
				});
			});
	};

	// google recaptcha
	const [isGoogleReCaptchaVerify, setIsGoogleReCaptchaVerify] = useState(false);

	// google recaptcha handler
	const onChangeHandler = () => setIsGoogleReCaptchaVerify(true);

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<section className='login-register'>
				<div className='login'>
					<span className='login__title'>ورود به حساب کاربری</span>
					<span className='login__subtitle'>خوشحالیم دوباره می بینیمت دوست عزیز :)</span>
					<div className='login__new-member'>
						<span className='login__new-member-text'>کاربر جدید هستید؟</span>
						<Link
							className='login__new-member-link'
							to='/register'>
							ثبت نام
						</Link>
					</div>
					<form
						action='#'
						className='login-form'>
						<div className='login-form__username'>
							<Input
								id='username'
								element='input'
								className='login-form__username-input'
								type='text'
								placeholder='نام کاربری یا آدرس ایمیل'
								validations={[requiredValidator(), minValidator(8)]}
								onInputHandler={onInputHandler}
							/>
							<i className='login-form__username-icon fa fa-user'></i>
						</div>
						<div className='login-form__password'>
							<Input
								id='password'
								element='input'
								className='login-form__password-input'
								type='password'
								placeholder='رمز عبور'
								validations={[requiredValidator(), minValidator(8), maxValidator(18)]}
								onInputHandler={onInputHandler}
							/>
							<i className='login-form__password-icon fa fa-lock-open'></i>
						</div>
						<div className='login-form__password recaptcha-parent'>
							<ReCAPTCHA
								sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
								onChange={onChangeHandler}
							/>
						</div>
						,
						<Button
							className={`login-form__btn ${
								formState.isFormValid && isGoogleReCaptchaVerify
									? 'login-form__btn-success'
									: 'login-form__btn-error'
							}`}
							type='submit'
							disabled={!(formState.isFormValid && isGoogleReCaptchaVerify)}
							onClick={userLogin}>
							<i className='login-form__btn-icon fas fa-sign-out-alt'></i>
							<span className='login-form__btn-text'>ورود</span>
						</Button>
						<div className='login-form__password-setting'>
							<label className='login-form__password-remember'>
								<input
									type='checkbox'
									className='login-form__password-checkbox'
								/>
								<span className='login-form__password-text'>مرا به خاطر داشته باش</span>
							</label>
							<label className='login-form__password-forget'>
								<a
									className='login-form__password-forget-link'
									href='#'>
									رمز عبور را فراموش کرده اید؟
								</a>
							</label>
						</div>
					</form>
					<div className='login__des'>
						<span className='login__des-title'>سلام کاربر محترم:</span>
						<ul className='login__des-list'>
							<li className='login__des-item'>
								لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.
							</li>
							<li className='login__des-item'>
								ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمی کنیم.
							</li>
							<li className='login__des-item'>
								لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Login;
