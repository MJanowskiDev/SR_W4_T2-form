import { styles } from './styles';
const RequiredError = ({ show }) => {
	const retVal = show ? <div style={styles.requiredError}>This field is required!</div> : null;
	return retVal;
};

export default RequiredError;
