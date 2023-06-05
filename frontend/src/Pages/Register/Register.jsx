// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Register.css';

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import {
	requiredValidator,
	minValidator,
	maxValidator,
	emailValidator,
} from '../../validators/rules';
import { useForm } from '../../hooks/useForms';

// register
function Register() {
	// new user register
	const registerNewUser = (event) => {
		event.preventDefault();

		console.log('user registered');
	};

  // form handler
	const [formState, onInputHandler] = useForm(
		{
			name: {
				value: '',
				isValid: false,
			},
			username: {
				value: '',
				isValid: false,
			},
			email: {
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

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<section className='login-register'>
				<div className='login register-form'>
					<span className='login__title'>ساخت حساب کاربری</span>
					<span className='login__subtitle'>خوشحالیم قراره به جمع ما بپیوندی</span>
					<div className='login__new-member'>
						<span className='login__new-member-text'>قبلا ثبت‌نام کرده‌اید؟ </span>
						<Link
							className='login__new-member-link'
							to='/login'>
							وارد شوید
						</Link>
					</div>
					<form
						action='#'
						className='login-form'>
						<div className='login-form__username'>
							<Input
								id='name'
								element='input'
								className='login-form__username-input'
								type='text'
								placeholder='نام و نام خانوادگی'
								validations={[requiredValidator(), minValidator(5), maxValidator(20)]}
                onInputHandler={onInputHandler}
							/>
							<i className='login-form__username-icon fa fa-user'></i>
						</div>
						<div className='login-form__username'>
							<Input
								id='username'
								element='input'
								className='login-form__username-input'
								type='text'
								placeholder='نام کاربری'
								validations={[requiredValidator(), minValidator(8), maxValidator(20)]}
                onInputHandler={onInputHandler}
							/>
							<i className='login-form__username-icon fa fa-user'></i>
						</div>
						<div className='login-form__password'>
							<Input
								id='email'
								element='input'
								className='login-form__password-input'
								type='text'
								placeholder='آدرس ایمیل'
								validations={[requiredValidator(), minValidator(10), emailValidator()]}
                onInputHandler={onInputHandler}
							/>
							<i className='login-form__password-icon fa fa-envelope'></i>
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
						<Button
							className={`login-form__btn ${formState.isFormValid ? 'login-form__btn-success' : 'login-form__btn-error'}`}
							type='submit'
							disabled={!formState.isFormValid}
							onClick={registerNewUser}>
							<i className='login-form__btn-icon fas fa-sign-out-alt'></i>
							<span className='login-form__btn-text'>ورود</span>
						</Button>
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
export default Register;
