import React, { PropsWithChildren, type SyntheticEvent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import styles from './Link.module.css';

export interface LinkProps
	extends React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	asChild?: boolean;
	onClick?: (e: SyntheticEvent) => void;
	className?: string;
}

const Link = ({
	title,
	href,
	target,
	asChild,
	children,
	className,
	onClick,
}: PropsWithChildren<LinkProps>): JSX.Element => {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			className={classNames(styles.root, className)}
			title={title}
			href={href}
			target={target}
			onClick={onClick}
		>
			{children}
		</Comp>
	);
};

export default Link;
