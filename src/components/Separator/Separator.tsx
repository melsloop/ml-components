import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import styles from './Separator.module.scss';
import classNames from 'classnames';

export interface SeparatorProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	orientation?: 'vertical' | 'horizontal';
	decorative?: boolean;
	asChild?: boolean;
	className?: string;
}

const Separator = ({
	orientation = 'vertical',
	decorative = true,
	asChild,
	className,
}: SeparatorProps): JSX.Element => (
	<SeparatorPrimitive.Root
		asChild={asChild}
		decorative={decorative}
		orientation={orientation}
		className={classNames(styles.root, className)}
	/>
);

export default Separator;
