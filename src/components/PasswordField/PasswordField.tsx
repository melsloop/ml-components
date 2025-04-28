import React, { useCallback, useRef, useState } from 'react';
import TextField from '../TextField';
import VisibilityIndicator from './VisibilityIndicator';
import classNames from 'classnames';
import styles from './PasswordField.module.css';
import type { InputProps } from '../Form/types';

const PasswordField = ({ autocomplete, className, ...props }: InputProps) => {
	const [reveal, setReveal] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const setSelectionRange = useCallback(() => {
		if (inputRef?.current?.value) {
			const idx = inputRef.current.value.length;
			inputRef?.current?.setSelectionRange(idx, idx);
		}
	}, [inputRef?.current?.type]);

	const onVisibilityChange = useCallback((e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setReveal((prevReveal) => !prevReveal);
		setTimeout(() => setSelectionRange());
	}, []);

	return (
		<TextField
			{...props}
			type={reveal ? 'text' : 'password'}
			autoComplete={autocomplete}
			customInputRef={inputRef}
			className={classNames(styles.root, className)}
		>
			<VisibilityIndicator
				visibility={reveal}
				onClick={onVisibilityChange}
			/>
		</TextField>
	);
};

PasswordField.displayName = 'PasswordField';

export default PasswordField;
