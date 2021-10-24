import { styles } from './styles';
import RequiredError from './RequiredError';
const TextArea = ({ name, label, onChange, showError, props }) => {
	const onChangeHandle = (e) => {
		onChange && onChange(e);
	};
	return (
		<div style={styles.container}>
			<label style={styles.label} htmlFor={name}>
				{label}
			</label>
			<textarea
				onChange={onChangeHandle}
				style={showError ? styles.inputError : styles.input}
				name={name}
				{...props}
			/>
			<RequiredError show={showError} />
		</div>
	);
};

export default TextArea;
