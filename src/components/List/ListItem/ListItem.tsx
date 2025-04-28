import React, { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './ListItem.module.css';

type ListItemProps = {
	className?: string;
};

const ListItem = forwardRef<HTMLLIElement, PropsWithChildren<ListItemProps>>(
	({ children, className }: PropsWithChildren<ListItemProps>, ref) => (
		<li
			ref={ref}
			className={classNames(styles.root, className)}
		>
			{children}
		</li>
	),
);

ListItem.displayName = 'ListItem';

export default ListItem;

export type { ListItemProps };
