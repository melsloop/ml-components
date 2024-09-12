import type { RadiusSize, ShadowSize } from '../../theme/types';

import React, { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classnames from 'classnames';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	sticky?: boolean;
	stickyPosition?: 'top' | 'bottom';
	flexDirection?: 'row' | 'column';
	spaceBetween?: boolean;
	alignItemsCenter?: boolean;
	alignContentRight?: boolean;
	alignContentLeft?: boolean;
	horizontalGutter?: boolean;
	shadow?: ShadowSize;
	radius?: RadiusSize;
	gap?: string;
	asChild?: boolean;
	className?: string;
}

const Container = ({
	sticky,
	stickyPosition,
	spaceBetween,
	flexDirection,
	alignItemsCenter,
	alignContentRight,
	alignContentLeft,
	horizontalGutter,
	shadow,
	radius,
	gap,
	children,
	asChild,
	className,
	...props
}: PropsWithChildren<ContainerProps>) => {
	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			data-sticky={sticky}
			data-sticky-position={stickyPosition}
			data-space-between={spaceBetween}
			data-align-items-center={alignItemsCenter}
			data-align-content-right={alignContentRight}
			data-align-content-left={alignContentLeft}
			data-shadow={shadow}
			data-radius={radius}
			data-gap={gap}
			data-horizontal-gutter={horizontalGutter}
			data-flex-direction={flexDirection}
			className={classnames(styles.root, className)}
			{...props}
		>
			{children}
		</Comp>
	);
};

export default Container;
