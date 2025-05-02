import React, { PropsWithChildren } from 'react';
import { TextField as TextFieldPrimitive } from '@radix-ui/themes';
import classNames from 'classnames';
import styles from './TextFieldSlot.module.css';

const TextFieldSlot = ({
	slot,
	children,
	className,
	...rest
}: PropsWithChildren<{ slot?: string; className?: string }>) => (
	<TextFieldPrimitive.Slot
		data-slot={slot}
		className={classNames(
			styles.root,
			{
				[styles.prefix]: slot === 'prefix',
				[styles.suffix]: slot !== 'prefix',
			},
			className,
		)}
		{...rest}
	>
		{children}
	</TextFieldPrimitive.Slot>
);

TextFieldSlot.displayName = 'TextFieldSlot';

export default TextFieldSlot;
