import { styles } from './styles';
import RequiredError from './RequiredError';
const RadioInput = ({ label, name, showError, options, onChange }) => {
	const onChangeHandle = (e) => {
		onChange && onChange(e);
	};
	return (
		<div style={styles.container}>
			<span style={styles.label}>{label}</span>
			{options.map((element, id) => (
				<div key={`key-${id}`}>
					<input
						style={styles.radioInput}
						key={`input-${id}`}
						type='radio'
						name={name}
						value={element.value}
						onChange={onChangeHandle}
					/>
					<label key={`label-${id}`} htmlFor={element.name}>
						{element.value}
					</label>
				</div>
			))}
			<RequiredError show={showError} />
		</div>
	);
};

export default RadioInput;
