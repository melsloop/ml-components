import type { ComponentSize } from '../../theme/types';

import React, { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classnames from 'classnames';
import styles from './Text.module.css';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 'body1' | 'body2';

export interface TextProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	asChild?: boolean;
	size: ComponentSize;
	variant?: TextVariant | HeadingVariant;
	italics?: boolean;
	weight?: number;
	locale?: string;
	className?: string;
}

const Text = ({
	asChild,
	size,
	variant,
	italics,
	children,
	className,
	...props
}: PropsWithChildren<TextProps>) => {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			data-variant={variant}
			data-size={size}
			data-italics={italics}
			className={classnames(styles.root, className)}
			{...props}
		>
			<span className={styles.text}>{children}</span>
		</Comp>
	);
};

export default Text;
