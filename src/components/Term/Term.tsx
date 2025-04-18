import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Term.module.css';
import { Slot } from '@radix-ui/react-slot';

export interface TermProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	decoration?: string;
	asChild?: boolean;
	className?: string;
}

export const Term = ({
	decoration,
	children,
	asChild,
	className,
}: PropsWithChildren<TermProps>): JSX.Element => {
	const Comp = asChild ? Slot : 'dfn';

	return (
		<Comp
			data-decoration={decoration || '*'}
			className={classnames(styles.root, className)}
		>
			{children}
		</Comp>
	);
};

export default Term;
