import { styles } from './styles';

const Form = ({ children, onSubmit }) => {
	const handleSubmit = (e) => {
		onSubmit && onSubmit(e);
	};
	return (
		<form onSubmit={handleSubmit} style={styles.form}>
			{children}
		</form>
	);
};

export default Form;
