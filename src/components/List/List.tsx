import React, {
	HTMLAttributes,
	isValidElement,
	ReactNode,
	useCallback,
} from 'react';
import ListItem from './ListItem';
import classNames from 'classnames';
import styles from './List.module.css';
import { RadiusSize, SpacingSize } from '../../theme/types';

type ListProps = {
	listStyle?: 'ordered' | 'bulleted';
	fullWidth?: boolean;
	spacing?: SpacingSize;
	radius?: RadiusSize;
	bordered?: boolean;
	listStyleType?: 'disc' | 'square' | 'circle' | 'decimal';
	className?: string;
	children?: ReactNode | ((props: { className: string }) => ReactNode);
};

type CustomChildProps = { className?: string; children: React.ReactElement[] };

const List = ({
	listStyle,
	fullWidth,
	spacing,
	radius,
	bordered,
	listStyleType,
	children,
	className,
}: ListProps & HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const isOrdered = listStyle === 'ordered';
	const Tag = isOrdered ? 'ol' : 'ul';

	const renderChildren = useCallback(() => {
		if (typeof children === 'function') {
			return children({ className: styles.item });
		}

		if (Array.isArray(children)) {
			return React.Children.map(children, (child, idx) => {
				if (isValidElement<CustomChildProps>(child)) {
					const itemClassName = classNames(child.props.className, styles.item);
					return (
						<ListItem className={itemClassName}>
							{isOrdered ? (
								<span className={styles.index}>{idx + 1}</span>
							) : (
								<li className={styles.bullet}></li>
							)}
							{child.props.children}
						</ListItem>
					);
				}
				return child;
			});
		}

		return children;
	}, [children]);

	return (
		<Tag
			className={classNames(
				styles.root,
				styles[`list-style-type-${isOrdered ? 'decimal' : listStyleType}`],
				styles[`spacing-${spacing}`],
				styles[`radius-${radius}`],
				className,
				{
					[styles.ordered]: isOrdered,
					[styles.bordered]: bordered,
					[styles.fullWidth]: fullWidth,
				},
			)}
		>
			{renderChildren()}
		</Tag>
	);
};

export default List;
