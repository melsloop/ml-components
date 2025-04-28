import type {
	BorderSize,
	RadiusSize,
	ShadowSize,
	SpacingSize,
} from '../../theme/types';

import React, { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	sticky?: boolean;
	stickyPosition?: 'top' | 'bottom';
	flexDirection?: 'row' | 'column';
	justifyContent?:
		| 'center'
		| 'start'
		| 'end'
		| 'flex-start'
		| 'flex-end'
		| 'left'
		| 'right';
	alignItems?:
		| 'normal'
		| 'stretch'
		| 'center'
		| 'start'
		| 'end'
		| 'flex-start'
		| 'flex-end'
		| 'self-start'
		| 'self-end'
		| 'anchor-center'
		| 'baseline'
		| 'first-baseline'
		| 'last-baseline'
		| 'safe-center'
		| 'unsafe-center';
	spacing?: SpacingSize;
	shadow?: ShadowSize;
	radius?: RadiusSize;
	border?: BorderSize;
	bordered?: boolean;
	gap?: string;
	minHeight?: string;
	backgroundColor?: string;
	borderColor?: string;
	asChild?: boolean;
	className?: string;
}

const Container = ({
	sticky,
	stickyPosition,
	justifyContent,
	alignItems,
	flexDirection,
	spacing,
	shadow,
	radius,
	border,
	gap,
	bordered,
	minHeight,
	children,
	backgroundColor,
	borderColor,
	asChild,
	className,
	...rest
}: PropsWithChildren<ContainerProps>) => {
	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			className={classNames(
				styles[`radius-${radius}`],
				styles[`shadow-${shadow}`],
				styles[`spacing-${spacing}`],
				styles[`border-${border}`],
				styles[`gap-${gap}`],
				styles[`flex-direction-${flexDirection}`],
				styles[`align-items-${alignItems}`],
				styles[`justify-content-${justifyContent}`],
				styles[`sticky-position-${stickyPosition}`],
				styles.root,
				{
					[styles.bordered]: bordered,
					[styles.sticky]: sticky,
				},
				className,
			)}
			style={{ minHeight, backgroundColor, borderColor }}
			{...rest}
		>
			{children}
		</Comp>
	);
};

export default Container;
