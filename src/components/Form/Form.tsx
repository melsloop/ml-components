import type { FormProps } from './types';

import React, { useState } from 'react';
import * as yup from 'yup';
import { Field, Formik, Form as FormikForm } from 'formik';
import { handleSubmit } from '../Recaptcha/Recaptcha';
import Container from '../Container';
import Button from '../Button';
import Spinner from '../Spinner';
import Recaptcha from '../Recaptcha';
import CustomField from '../CustomField';
import { getIcon } from '../icons';
import styles from './Form.module.css';

const Form = ({
	fields,
	path,
	recaptchaSiteKey = '',
	submitButtonLabel,
	submitButtonIcon,
	submitButtonLabelActive,
	onSuccess,
	onError,
}: FormProps) => {
	const [submitting, setSubmitting] = useState(false);

	const initialValues = Object.fromEntries(
		fields.map(({ name, initialValue }) => [name, initialValue]),
	);

	const validationSchema = Object.fromEntries(
		fields.map(({ name, validation }) => [name, validation]),
	) as yup.ObjectShape;

	return (
		<div className={styles.root}>
			<Formik
				initialValues={initialValues}
				validationSchema={yup.object().shape(validationSchema)}
				onSubmit={(values: Record<string, unknown>, { resetForm }) => {
					setSubmitting(true);
					handleSubmit({
						siteKey: recaptchaSiteKey,
						path,
						action: 'submit',
						values,
						onResponseSuccess: () => {
							setSubmitting(false);
							resetForm();
							onSuccess?.();
						},
						onError: (e) =>
							onError?.((e as Error)?.message || 'Form submit error'),
					});
				}}
			>
				{({ dirty, isValid, touched, errors }) => (
					<FormikForm>
						<div className={styles.fieldset}>
							{fields.map(
								({
									name,
									label,
									placeholder,
									icon,
									required,
									type,
									component,
								}) => (
									<CustomField
										key={name}
										name={name}
										label={label}
										icon={icon}
										placeholder={placeholder}
										type={type}
										isInvalid={!!touched[name] && !!errors[name]?.length}
										isValid={touched[name] && !errors[name]?.length}
										errorMessage={errors[name]}
										required={required}
									>
										<Field
											name={name}
											type={type}
											component={component}
										/>
									</CustomField>
								),
							)}
						</div>
						<Container
							className={styles.panel}
							// spaceBetween
							// fullWidth
							// alignContentRight
						>
							<Button
								variant="contained"
								mode="primary"
								size="xs"
								className={styles.submitButton}
								type="submit"
								disabled={!dirty || (dirty && !isValid)}
							>
								{submitting ? (
									<Spinner
										delay={0}
										label={submitButtonLabelActive}
									/>
								) : (
									<>
										{submitButtonIcon && getIcon(submitButtonIcon)}
										{submitButtonLabel}
									</>
								)}
							</Button>
						</Container>
					</FormikForm>
				)}
			</Formik>

			{recaptchaSiteKey && <Recaptcha siteKey={recaptchaSiteKey} />}
		</div>
	);
};

export default Form;
