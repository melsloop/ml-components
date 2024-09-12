import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Table.module.css';

export type TableProps = {
	className?: string;
};

export const Table = ({
	children,
	className,
}: PropsWithChildren<TableProps>) => (
	<table
		key={'dada'}
		className={classNames(styles.root, className)}
	>
		<tbody>{children}</tbody>
	</table>
);

export default Table;
