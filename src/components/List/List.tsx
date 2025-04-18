import type { ListItemProps } from './ListItem/ListItem';

import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import Link from '../Link';
import ListItem from './ListItem';
import classNames from 'classnames';
import styles from './List.module.css';

type ListProps = {
	items?: ListItemProps[];
	ordered?: boolean;
	itemDecoration?: 'disc' | 'square' | 'circle';
	className?: string;
	children?: ReactNode | ((props: { className: string }) => ReactNode);
};

const renderListItems = (items: ListItemProps[]) =>
	items.map(({ label, target, url }) => {
		return (
			<ListItem
				key={label}
				className={styles.item}
			>
				{url ? (
					<Link
						href={url}
						target={target}
						className={styles.link}
					>
						{label}
					</Link>
				) : (
					label
				)}
			</ListItem>
		);
	});

const List = ({
	items = [],
	ordered,
	itemDecoration,
	children,
	className,
}: ListProps & HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const Tag = ordered ? 'ol' : 'ul';
	const hasItemsProp = Object.keys(items).length > 0;

	const renderChildren = () => {
		if (typeof children === 'function') {
			return children({ className: styles.item });
		}

		if (Array.isArray(children)) {
			return React.Children.map(children, (child) => {
				if (
					React.isValidElement<{ className?: string; 'data-type'?: string }>(
						child,
					)
				) {
					return React.cloneElement(child, {
						className: classNames(child.props.className, styles.item),
						'data-type': child.props['data-type'],
					});
				}
				return child;
			});
		}

		return children;
	};

	return (
		<Tag
			data-ordered={ordered}
			data-item-decoration={itemDecoration}
			className={classNames(styles.root, className)}
		>
			{renderChildren()}
		</Tag>
	);
};

export default List;
