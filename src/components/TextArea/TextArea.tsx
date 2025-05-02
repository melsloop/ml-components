import React, { PropsWithChildren, forwardRef } from 'react';
import FormField from '../Form/FormField/FormField';
import { TextArea as TextAreaPrimitive } from '@radix-ui/themes';
import classNames from 'classnames';
import styles from './TextArea.module.css';
import { InputProps } from '../Form/types';

type TextAreaProps = InputProps;

const TextArea = forwardRef<
	HTMLTextAreaElement,
	PropsWithChildren<TextAreaProps>
>(({ className, ...props }, ref) => {
	return (
		<FormField
			{...props}
			className={classNames(styles.root, className)}
		>
			<TextAreaPrimitive
				resize={'both'}
				ref={ref}
				className={styles.inputElement}
			></TextAreaPrimitive>
		</FormField>
	);
});

TextArea.displayName = 'TextArea';

export default TextArea;
