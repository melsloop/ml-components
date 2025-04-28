import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './FormLabel.module.css';
import * as FormPrimitive from '@radix-ui/react-form';

type FormLabelProps = {
	isRequired?: boolean;
	className?: string;
};

const FormLabel = ({
	isRequired,
	children,
	className,
}: PropsWithChildren<FormLabelProps>) => (
	<span className={classNames(styles.root, className)}>
		<FormPrimitive.Label>
			{children}
			{isRequired && <span className={styles.requiredIndicator}></span>}
		</FormPrimitive.Label>
	</span>
);

FormLabel.displayName = 'FormLabel';

export default FormLabel;
