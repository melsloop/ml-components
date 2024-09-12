type ErrorMessageProps = {
	validity: ValidityState;
};

export const getErrorMessage = ({ validity }: ErrorMessageProps) => {
	const {
		valueMissing,
		typeMismatch,
		badInput,
		customError,
		patternMismatch,
		rangeOverflow,
		rangeUnderflow,
		stepMismatch,
		tooLong,
		tooShort,
	} = validity;

	if (valueMissing) {
		return 'Value missing';
	} else if (typeMismatch) {
		return 'Type mismatch';
	} else if (badInput) {
		return 'Bad input';
	} else if (customError) {
		return 'Custom error';
	} else if (patternMismatch) {
		return 'Pattern mismatch';
	} else if (rangeOverflow) {
		return 'Range overflow';
	} else if (rangeUnderflow) {
		return 'Range underflow';
	} else if (stepMismatch) {
		return 'Step mismatch';
	} else if (tooLong) {
		return 'Too long';
	} else if (tooShort) {
		return 'Too short';
	}
	return '';
};
