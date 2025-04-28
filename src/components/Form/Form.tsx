import React, { PropsWithChildren } from 'react';
import * as FormPrimitive from '@radix-ui/react-form';
import classNames from 'classnames';
import styles from './Form.module.css';

type FormProps = {
	noValidate?: boolean;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	className?: string;
};

const Form = ({
	children,
	noValidate,
	className,
	onSubmit,
}: PropsWithChildren<FormProps>): JSX.Element => {
	return (
		<FormPrimitive.Root
			noValidate={noValidate}
			className={classNames(styles.root, className)}
			onSubmit={onSubmit}
		>
			{children}
		</FormPrimitive.Root>
	);
};

Form.displayName = 'Form';

export default Form;
