import type { RadiusSize, ShadowSize, SpacingSize } from '../../theme/types';

import React, { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classnames from 'classnames';
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
	bordered?: boolean;
	gap?: string;
	minHeight?: string;
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
	gap,
	bordered,
	minHeight,
	children,
	asChild,
	className,
	...props
}: PropsWithChildren<ContainerProps>) => {
	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			// data-sticky={sticky}
			data-sticky-position={stickyPosition}
			// data-shadow={shadow}
			// data-radius={radius}
			// data-gap={gap}
			// data-flex-direction={flexDirection}
			// data-justify-content={justifyContent}
			// data-align-items={alignItems}
			// data-spacing={spacing}
			// data-bordered={bordered}
			className={classnames(
				styles[`radius-${radius}`],
				styles[`shadow-${shadow}`],
				styles[`spacing-${spacing}`],
				styles[`flex-direction-${flexDirection}`],
				styles[`align-items-${alignItems}`],
				styles[`justify-content-${justifyContent}`],
				styles[`gap-${gap}`],
				// [styles.stickyPosition],
				styles.root, {
					[styles.bordered]: bordered,
					[styles.sticky]: sticky,
				},
				className
			)}
			style={{ minHeight }}
			{...props}
		>
			{children}
		</Comp>
	);
};

export default Container;
