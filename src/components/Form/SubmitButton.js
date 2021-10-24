import { styles } from './styles';

const SubmitButton = ({ label, onClick, props }) => {
	const onClickHandle = (e) => {
		onClick && onClick(e);
	};
	return (
		<button onClick={onClickHandle} style={styles.button} type='submit' {...props}>
			{label}
		</button>
	);
};

export default SubmitButton;
