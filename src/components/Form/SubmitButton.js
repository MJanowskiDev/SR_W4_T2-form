import { styles } from './styles';

const SubmitButton = ({ label, props }) => {
	return (
		<button style={styles.button} type='submit' {...props}>
			{label}
		</button>
	);
};

export default SubmitButton;
