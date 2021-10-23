import { styles } from './styles';
const CheckBox = ({ name, label, props }) => {
	return (
		<div>
			<input style={styles.checkbox} type='checkbox' name={name} />
			<label style={styles.checkboxLabel} htmlFor={name} {...props}>
				{label}
			</label>
		</div>
	);
};

export default CheckBox;
