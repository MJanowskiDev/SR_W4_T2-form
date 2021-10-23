import { styles } from './styles';

const TextArea = ({ name, label, props }) => {
	return (
		<div style={styles.container}>
			<label style={styles.label} htmlFor={name}>
				{label}
			</label>
			<textarea style={styles.textarea} name={name} {...props} />
		</div>
	);
};

export default TextArea;
