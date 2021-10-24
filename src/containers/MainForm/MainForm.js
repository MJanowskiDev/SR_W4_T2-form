import { useState } from 'react';

import { TextInput, TextArea, CheckBox, RadioInput, Form, SubmitButton, AfterSubmit } from 'components/Form';

const initState = {
	name: { value: '', isEmpty: true },
	email: { value: '', isEmpty: true },
	bio: { value: '', isEmpty: true },
	sex: { value: '', isEmpty: true },
	terms: { value: '', isEmpty: true }
};

const styles = {
	width: '50vw',
	minWidth: 400
};
const MainForm = () => {
	const [ formState, setFormState ] = useState(initState);

	const [ showError, setShowError ] = useState(false);
	const [ formSubmitted, setFormSubmitted ] = useState(false);

	const changedHandle = (e) => {
		setFormState({ ...formState, [e.target.name]: { value: e.target.value, isEmpty: e.target.value === '' } });
	};

	const checkIfAnyIsEmpty = (formState) => {
		let retVal;
		Object.keys(formState).map((key) => {
			retVal = retVal || formState[key].isEmpty;
		});

		return retVal;
	};

	const onSubmitClickHandle = (e) => {
		if (checkIfAnyIsEmpty(formState)) {
			setShowError(true);
			e.preventDefault();
		}
	};
	const onFormSubmitHandle = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	const onConfirmHandle = () => {
		setFormSubmitted(false);
		setShowError(false);
		setFormState(initState);
	};

	const reactForm = (
		<Form onSubmit={onFormSubmitHandle}>
			<TextInput
				onChange={changedHandle}
				showError={showError && formState['name'].isEmpty}
				name='name'
				label='Name'
			/>
			<TextInput
				onChange={changedHandle}
				showError={showError && formState['email'].isEmpty}
				name='email'
				label='Email'
				props={{ type: 'email' }}
			/>
			<TextArea
				onChange={changedHandle}
				showError={showError && formState['bio'].isEmpty}
				name='bio'
				label='Bio'
			/>
			<RadioInput
				onChange={changedHandle}
				label='Sex'
				name='sex'
				showError={showError && formState['sex'].isEmpty}
				options={[ { label: 'female', value: 'Female' }, { label: 'male', value: 'Male' } ]}
			/>
			<CheckBox
				onChange={changedHandle}
				name='terms'
				showError={(showError && formState['terms'].isEmpty) || formState['terms'].value === 'unchecked'}
				label='I agree to the terms of service'
			/>
			<SubmitButton onClick={onSubmitClickHandle} label='Submit' />
		</Form>
	);

	const afterSubmit = <AfterSubmit onConfirm={onConfirmHandle} />;

	return (
		<div style={styles}>
			<h1>React form</h1>
			{formSubmitted ? afterSubmit : reactForm}
		</div>
	);
};

export default MainForm;
