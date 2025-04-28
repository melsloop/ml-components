import React from 'react';
import BaseInput from './BaseInput';
import classNames from 'classnames';
import styles from './GenericInput.module.css';
import FormField from '../Form/FormField';
import Form from '../Form/Form';
import Checkbox from '../Checkbox';

const GenericInput = ({
	label,
	type,
	required,
	readOnly,
	disabled,
	children,
	className,
}): JSX.Element => {
	return (
		<Form>
			<FormField
				label={label}
				type={type}
				required={required}
				readOnly={readOnly}
				disabled={disabled}
			></FormField>
		</Form>
		// <BaseInput
		// 	label={label}
		// 	required={required}
		// 	readOnly={readOnly}
		// 	disabled={disabled}
		// 	className={classNames(styles.root, className)}
		// >
		// 	{children}
		// </BaseInput>
	);
};

GenericInput.displayName = 'GenericInput';

export default GenericInput;
