// react
import React from 'react';

// styles
import './Contact.css';

// packages
import swal from 'sweetalert';

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import {
	requiredValidator,
	minValidator,
	maxValidator,
	emailValidator,
} from '../../validators/rules';
import { useNavigate } from 'react-router-dom';

// hooks
import { useForm } from '../../hooks/useForms';

// contact
function Contact() {
	// navigator
	const navigate = useNavigate();

	// form validation
	const [formState, onInputHandler] = useForm(
		{
			name: {
				value: '',
				isValid: false,
			},
			email: {
				value: '',
				isValid: false,
			},
			phone: {
				value: '',
				isValid: '',
			},
			body: {
				value: '',
				isValid: '',
			},
		},
		false
	);

	// post new contact
	const addNewContact = (event) => {
		event.preventDefault();

		const newContactInfos = {
			name: formState.inputs.name.value,
			email: formState.inputs.email.value,
			phone: formState.inputs.phone.value,
			body: formState.inputs.body.value,
		};

		fetch('http://localhost:3000/v1/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newContactInfos),
		}).then((res) => {
			if (res.ok) {
				swal({
					title: 'پیغام شما با موفقیت به مدیران سایت ارسال شد',
					icon: 'success',
					buttons: 'اوکی',
				}).then((value) => {
					navigate('/');
				});
			}
		});
	};

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<section className='login-register'>
				<div className='login register-form'>
					<span className='login__title'>ارتباط با ما</span>
					<span className='login__subtitle'>نظر یا انتقادتو بنویس برامون :)</span>
					<form
						action='#'
						className='login-form'>
						<div className='login-form__username login-form__parent'>
							<Input
								onInputHandler={onInputHandler}
								element='input'
								id='name'
								className='login-form__username-input'
								type='text'
								placeholder='نام و نام خانوادگی'
								validations={[requiredValidator(), minValidator(6), maxValidator(20)]}
							/>
							<i className='login-form__username-icon fa fa-user'></i>
						</div>
						<div className='login-form__password login-form__parent'>
							<Input
								onInputHandler={onInputHandler}
								element='input'
								id='email'
								className='login-form__password-input'
								type='text'
								placeholder='آدرس ایمیل'
								validations={[
									requiredValidator(),
									minValidator(8),
									maxValidator(40),
									emailValidator(),
								]}
							/>
							<i className='login-form__password-icon fa fa-envelope'></i>
						</div>
						<div className='login-form__phone-number login-form__parent'>
							<Input
								onInputHandler={onInputHandler}
								element='input'
								id='phone'
								className='login-form__password-input'
								type='text'
								placeholder='شماره تماس'
								validations={[requiredValidator(), minValidator(11)]}
							/>
							<i className='login-form__password-icon fa fa-phone'></i>
						</div>
						<div className='login-form__text login-form__parent'>
							<Input
								onInputHandler={onInputHandler}
								element='textarea'
								id='body'
								className={`login-form__text-input ${
									formState.inputs.body.value
										? formState.inputs.body.isValid
											? 'login-form__text-input--success'
											: 'login-form__text-input--error'
										: null
								}`}
								placeholder='متن خود را وارد کنید'
								validations={[requiredValidator(), minValidator(10)]}
							/>
						</div>
						<Button
							className={`login-form__btn ${
								formState.isFormValid ? 'login-form__btn-success' : 'login-form__btn-error'
							}`}
							type='submit'
							onClick={addNewContact}
							disabled={!formState.isFormValid}>
							<span className='login-form__btn-text'>ارسال</span>
						</Button>
					</form>
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Contact;
