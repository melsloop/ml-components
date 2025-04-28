import React, { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import styles from './Text.module.css';

export type TextAlign = 'left' | 'center' | 'right';

export type HeadingVariant =
	| 'title'
	| 'subtitle1'
	| 'subtitle2'
	| 'subtitle3'
	| 'subtitle4'
	| 'subtitle5';

export type TextVariant =
	| 'title'
	| 'subtitle1'
	| 'subtitle2'
	| 'subtitle3'
	| 'subtitle4'
	| 'subtitle5'
	| 'body1'
	| 'body2';

export const headingVariants: HeadingVariant[] = [
	'title',
	'subtitle1',
	'subtitle2',
	'subtitle3',
	'subtitle4',
	'subtitle5',
];

export const textVariants: TextVariant[] = ['body1', 'body2'];

export interface TextProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	asChild?: boolean;
	variant?: TextVariant | HeadingVariant;
	textAlign?: TextAlign;
	fullWidth?: boolean;
	className?: string;
}

const Text = ({
	asChild,
	variant,
	textAlign,
	fullWidth,
	children,
	className,
	...rest
}: PropsWithChildren<TextProps>) => {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			className={classNames(
				styles.root,
				styles[variant as string],
				styles[`text-align-${textAlign}`],
				className,
				{
					[styles.fullWidth]: fullWidth,
				},
			)}
			{...rest}
		>
			{children}
		</Comp>
	);
};

export default Text;
