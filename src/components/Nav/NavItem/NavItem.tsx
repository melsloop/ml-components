import React from 'react';
import { getIcon } from '../../icons';
import styles from './NavItem.module.scss';
import classNames from 'classnames';
import Link from '../../Link';
import Text from '../../Text';

type NavItemContentProps = {
	title?: string;
	description?: string;
	author?: string;
	icon?: string;
	url?: string;
	target?: string;
	isSelected?: boolean;
	onClick?: () => void;
	className?: string;
};

const NavItemContent = ({
	url,
	target,
	icon,
	title,
	description,
	author,
	onClick,
	className,
}: NavItemContentProps) => (
	<Link
		href={url}
		target={target}
		className={classNames(styles.root, className)}
		asChild
		onClick={onClick}
	>
		<span className={styles.gutter}>
			<span className={styles.content}>
				{icon && <span className={styles.icon}>{getIcon(icon)}</span>}
				<span className={styles.meta}>
					<Text data-xxx="h1" className={styles.title}>{title}</Text>
					<Text className={styles.description}>{description}</Text>
					<Text className={styles.author}>{author}</Text>
				</span>
			</span>
		</span>
	</Link>
);

export default NavItemContent;
export type { NavItemContentProps };
