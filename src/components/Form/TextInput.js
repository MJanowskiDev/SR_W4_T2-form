import { styles } from './styles';

const TextInput = ({ name, label, props }) => {
	return (
		<div style={styles.container}>
			<label style={styles.label} htmlFor={name}>
				{label}
			</label>
			<input style={styles.input} name={name} {...props} />
		</div>
	);
};

export default TextInput;
