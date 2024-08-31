import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Term.module.css';

export interface TermProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	className?: string;
}

export const Term = ({ children, className }: PropsWithChildren<TermProps>): JSX.Element => (
	<span className={classnames(styles.root, className)}>
		<dfn className={styles.label}>{children}</dfn>
	</span>
);

export default Term;
