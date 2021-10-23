import { TextInput, TextArea, CheckBox, RadioInput, SubmitButton, Form } from 'components/Form';

const MainForm = () => {
	return (
		<div>
			<h1>React form</h1>
			<Form>
				<TextInput name='name' label='Name' />
				<TextInput name='email' label='Email' props={{ type: 'email' }} />
				<TextArea name='bio' label='Bio' />
				<RadioInput
					label='Sex'
					options={[ { label: 'male', value: 'Female' }, { label: 'male', value: 'Male' } ]}
				/>
				<CheckBox name='terms' label='I agree to the terms of service' />
				<SubmitButton label='Submit' />
			</Form>
		</div>
	);
};

export default MainForm;
