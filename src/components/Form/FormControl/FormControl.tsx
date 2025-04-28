import React, { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './FormControl.module.css';
import * as FormPrimitive from '@radix-ui/react-form';

type FormControlProps = {
	asChild?: boolean;
	className?: string;
};

const FormControl = ({
	children,
	asChild,
	className,
}: PropsWithChildren<FormControlProps>) => (
	<FormPrimitive.Control
		asChild={asChild}
		className={classNames(styles.root, className)}
	>
		{children}
	</FormPrimitive.Control>
);

FormControl.displayName = 'FormControl';

export default FormControl;
