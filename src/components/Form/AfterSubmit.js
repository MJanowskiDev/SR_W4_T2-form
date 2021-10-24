import { styles } from './styles';
const AfterSubmit = ({ onConfirm }) => {
	const onConfirmHandle = () => {
		onConfirm && onConfirm();
	};
	return (
		<div style={styles.container}>
			<h3 style={styles.label}>Form submitted, thank You.</h3>
			<button style={styles.button} onClick={onConfirmHandle}>
				Back
			</button>
		</div>
	);
};

export default AfterSubmit;
