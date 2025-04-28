import React, { PropsWithChildren, useMemo } from 'react';
import FormField from '../Form/FormField/FormField';
import { TextField as TextFieldPrimitive } from '@radix-ui/themes';
import classNames from 'classnames';
import styles from './TextField.module.css';
import type { InputProps } from '../Form/types';
import TextFieldSlot from './TextFieldSlot';
import { mapSlottedContent } from '../../componentUtils/mapSlottedContent';

type TextFieldProps = InputProps & {
	autocomplete?: string;
	customInputClassname?: string;
	onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	type?:
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'hidden'
		| 'month'
		| 'number'
		| 'password'
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
};

const TextField = ({
	type = 'text',
	customInputClassname,
	children,
	className,
	onInput,
	onFocus,
	onBlur,
	...props
}: PropsWithChildren<TextFieldProps>) => {
	const slottedContent = useMemo(
		() =>
			mapSlottedContent(TextFieldSlot.displayName, children, {
				className: classNames(styles.slottedContent),
			}),
		[TextFieldSlot, children],
	);

	return (
		<FormField
			{...props}
			className={classNames(styles.root, className)}
		>
			<TextFieldPrimitive.Root
				type={type}
				className={classNames(styles.input, customInputClassname)}
				onInput={onInput}
				onFocus={onFocus}
				onBlur={onBlur}
			>
				{slottedContent}
			</TextFieldPrimitive.Root>
		</FormField>
	);
};

TextField.displayName = 'TextField';

export default TextField;
