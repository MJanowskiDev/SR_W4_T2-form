import { useRef } from 'react';
import { styles } from './styles';
import RequiredError from './RequiredError';

const CheckBox = ({ name, label, onChange, showError, props }) => {
	const cbRef = useRef();
	const onChangeHandle = (e) => {
		const cbVal = e.target.checked ? 'checked' : 'unchecked';
		cbRef.current.value = cbVal;
		onChange && onChange(e);
	};

	return (
		<div>
			<input ref={cbRef} onChange={onChangeHandle} style={styles.checkbox} type='checkbox' name={name} />
			<label style={styles.checkboxLabel} htmlFor={name} {...props}>
				{label}
			</label>
			<RequiredError show={showError} />
		</div>
	);
};

export default CheckBox;
