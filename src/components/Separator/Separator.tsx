import type { ThemeComponentSize } from '../../theme/types';

import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import classnames from 'classnames';
import styles from './Separator.module.css';

export interface SeparatorProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	orientation?: 'vertical' | 'horizontal';
	decorative?: boolean;
	size: keyof ThemeComponentSize;
	className?: string;
}

const Separator = ({
	orientation = 'vertical',
	decorative = true,
	size = 'md',
	className,
	...props
}: SeparatorProps): JSX.Element => (
	<span
		data-size={size}
		className={classnames(styles.root, className)}
		{...props}
	>
		<SeparatorPrimitive.Root
			className={styles.separator}
			decorative={decorative}
			orientation={orientation}
		></SeparatorPrimitive.Root>
	</span>
);

export default Separator;
