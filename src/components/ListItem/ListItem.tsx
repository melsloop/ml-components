import React, { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './ListItem.module.scss';

type ListItemProps = {
	label?: string;
	url?: string;
	isSelected?: boolean;
	target?: '_blank';
	className?: string;
};

const ListItem = forwardRef<HTMLLIElement, PropsWithChildren<ListItemProps>>(
	({ children, className, isSelected, ...rest }: PropsWithChildren<ListItemProps>, ref) => (
		<li
			ref={ref}
			data-selected={isSelected}
			className={classNames(styles.root, className)}
		>
			<span className={styles.container}>
				{children}
				{isSelected && <span className={styles.marker} />}
			</span>
		</li>
	)
);

ListItem.displayName = 'ListItem';

export default ListItem;
export type { ListItemProps };
