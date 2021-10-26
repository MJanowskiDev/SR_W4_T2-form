import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AfterSubmit, styles } from 'components/Form';

const divStyle = {
	width: '50vw',
	minWidth: 400
};

export default function App() {
	const { reset, register, handleSubmit, formState: { errors } } = useForm();

	const [ formSubmitted, setFormSubmitted ] = useState(false);

	const onSubmit = (data) => {
		setFormSubmitted(true);
	};

	const onConfirmHandle = () => {
		setFormSubmitted(false);
		reset();
	};

	const afterSubmit = <AfterSubmit onConfirm={onConfirmHandle} />;

	const reactForm = (
		<form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div style={styles.container}>
				<label htmlFor='name' style={styles.label}>
					Name
				</label>
				<input
					id='name'
					style={styles.input}
					type='text'
					{...register('name', { required: true, maxLength: 80 })}
				/>
				{errors.name && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<label htmlFor='email' style={styles.label}>
					Email
				</label>
				<input
					id='email'
					style={styles.input}
					type='email'
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				{errors.email && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<label htmlFor='bio' style={styles.label}>
					Bio
				</label>
				<textarea id='bio' style={styles.textarea} {...register('bio', { required: true })} />
				{errors.bio && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<span style={styles.label}>Sex</span>
				<div>
					<input
						id='female'
						style={styles.radioInput}
						{...register('sex', { required: true })}
						type='radio'
						value='Female'
					/>
					<label htmlFor='femal'>Female</label>
				</div>
				<div>
					<input
						id='male'
						style={styles.radioInput}
						{...register('sex', { required: true })}
						type='radio'
						value='Male'
					/>
					<label htmlFor='Male'>Male</label>
				</div>
				{errors.sex && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<div>
					<input
						id='terms'
						style={styles.checkbox}
						type='checkbox'
						{...register('terms', { required: true })}
					/>
					<label htmlFor='terms' style={styles.checkboxLabel}>
						I agree to the terms of service
					</label>
				</div>

				{errors.terms && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<input style={styles.button} type='submit' />
		</form>
	);

	return (
		<div style={divStyle}>
			<h1>React Hook Form</h1>
			{formSubmitted ? afterSubmit : reactForm}
		</div>
	);
}
