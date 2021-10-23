import { styles } from './styles';

const RadioInput = ({ label, options }) => {
	return (
		<div style={styles.container}>
			<span style={styles.label}>{label}</span>
			{options.map((element, id) => (
				<div key={`key-${id}`}>
					<input
						style={styles.radioInput}
						key={`input-${id}`}
						type='radio'
						id='huey'
						name={element.name}
						value={element.value}
					/>
					<label key={`label-${id}`} htmlFor={element.name}>
						{element.value}
					</label>
				</div>
			))}
		</div>
	);
};

export default RadioInput;
