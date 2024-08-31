import React, { PropsWithChildren, type SyntheticEvent } from 'react';
import styles from './Link.module.scss';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	label?: string;
	asChild?: boolean;
	onClick?: (e: SyntheticEvent) => void;
	className?: string;
}

const Link = ({
	label,
	title,
	href,
	target,
	asChild,
	children,
	className,
}: PropsWithChildren<LinkProps>): JSX.Element => {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			className={classNames(styles.root, className)}
			title={title}
			href={href}
			target={target}
		>
			{/* <NextLink
				href={href}
				target={target}
			> */}
        {children || label}
			{/* </NextLink> */}
		</Comp>
	);
};

export default Link;
