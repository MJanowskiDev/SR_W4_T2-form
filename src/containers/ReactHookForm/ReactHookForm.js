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
		console.log(data);
	};

	const onConfirmHandle = () => {
		setFormSubmitted(false);
		reset();
	};

	const afterSubmit = <AfterSubmit onConfirm={onConfirmHandle} />;

	const reactForm = (
		<form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div style={styles.container}>
				<label style={styles.label}>Name</label>
				<input style={styles.input} type='text' {...register('name', { required: true, maxLength: 80 })} />
				{errors.name && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<label style={styles.label}>Email</label>
				<input
					style={styles.input}
					type='email'
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				{errors.email && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<label style={styles.label}>Bio</label>
				<textarea style={styles.textarea} {...register('bio', { required: true })} />
				{errors.bio && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<span style={styles.label}>Sex</span>
				<div>
					<input
						style={styles.radioInput}
						{...register('sex', { required: true })}
						type='radio'
						value='Female'
					/>
					<label>Female</label>
				</div>
				<div>
					<input
						style={styles.radioInput}
						{...register('sex', { required: true })}
						type='radio'
						value='Male'
					/>
					<label>Male</label>
				</div>
				{errors.sex && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<div>
					<input style={styles.checkbox} type='checkbox' {...register('terms', { required: true })} />
					<label style={styles.checkboxLabel}>I agree to the terms of service</label>
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
