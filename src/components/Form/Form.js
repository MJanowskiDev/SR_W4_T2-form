import { styles } from './styles';

const Form = ({ children }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit} style={styles.form}>
			{children}
		</form>
	);
};

export default Form;
