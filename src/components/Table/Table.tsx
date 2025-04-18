import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Table.module.css';
import {
	ComponentSize,
	RadiusSize,
	ShadowSize,
	SpacingSize,
} from '../../theme/types';

export type TableProps = {
	textAlign?: 'left' | 'center' | 'right';
	verticalAlign?: 'top' | 'center' | 'bottom';
	size?: ComponentSize;
	verticalSpacing?: SpacingSize;
	horizontalSpacing?: SpacingSize;
	radius?: RadiusSize;
	shadow?: ShadowSize;
	fullWidth?: boolean;
	bordered?: boolean;
	className?: string;
};

export const Table = ({
	children,
	fullWidth,
	bordered,
	shadow,
	radius,
	size,
	verticalSpacing,
	textAlign,
	verticalAlign,
	horizontalSpacing,
	className,
}: PropsWithChildren<TableProps>) => (
	<span
		className={classNames(
			styles.root,
			styles[`size-${size}`],
			styles[`radius-${radius}`],
			styles[`shadow-${shadow}`],
			styles[`spacing-horizontal-${horizontalSpacing}`],
			styles[`spacing-vertical-${verticalSpacing}`],
			styles[`text-align-${textAlign}`],
			styles[`vertical-align-${verticalAlign}`],
			className,
			{
				[styles.fullWidth]: fullWidth,
				[styles.bordered]: bordered,
			},
		)}
		// data-vertical-align={verticalAlign}
	>
		<div className={classNames(styles.wrapper)}>
			<table className={styles.table}>
				<tbody>{children}</tbody>
			</table>
		</div>
	</span>
);

export default Table;
