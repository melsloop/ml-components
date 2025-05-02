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
	<FormPrimitive.Label asChild>
		<label className={classNames(styles.root, 'ml-FormLabel', className)}>
			<span className={styles.label}>
				{children}
				{isRequired && <span className={styles.requiredIndicator}></span>}
			</span>
		</label>
	</FormPrimitive.Label>
);

FormLabel.displayName = 'FormLabel';

export default FormLabel;
