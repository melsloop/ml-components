import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Term.module.css';

export interface TermProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	suffix?: string;
	className?: string;
}

export const Term = ({
	suffix,
	children,
	className,
}: PropsWithChildren<TermProps>): JSX.Element => (
	<dfn
		data-suffix={suffix || '*'}
		className={classnames(styles.root, className)}
	>
		{children}
	</dfn>
);

export default Term;
