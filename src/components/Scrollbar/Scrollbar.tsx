import type { ScrollAreaScrollbarProps } from '@radix-ui/react-scroll-area';
import type { TextDirection } from '../types';

import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import classnames from 'classnames';
import styles from './Scrollbar.module.css';

export type ScrollbarProps = {
	height?: number;
	textDirection: TextDirection;
} & ScrollAreaScrollbarProps;

const Scrollbar = ({
	children,
	height,
	textDirection,
	className,
	...props
}: ScrollbarProps) => (
	<ScrollAreaPrimitive.Root
		className={classnames(styles.root, className)}
		type="always"
		dir={textDirection}
		style={{ height: `${height}px` }}
	>
		<ScrollAreaPrimitive.Viewport
			className={styles.viewport}
			{...props}
		>
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollAreaPrimitive.Scrollbar
			className={styles.scrollbar}
			orientation="vertical"
		>
			<ScrollAreaPrimitive.Thumb className={styles.thumb} />
		</ScrollAreaPrimitive.Scrollbar>
		<ScrollAreaPrimitive.Scrollbar
			className={styles.scrollbar}
			orientation="horizontal"
		>
			<ScrollAreaPrimitive.Thumb className={styles.thumb} />
		</ScrollAreaPrimitive.Scrollbar>
		<ScrollAreaPrimitive.Corner className={styles.scrollAreaCorner} />
	</ScrollAreaPrimitive.Root>
);

export default Scrollbar;
