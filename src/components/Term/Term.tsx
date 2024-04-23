import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Term.module.scss';

export interface TermProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	className?: string;
}

export const Term = ({ children, className }: PropsWithChildren<TermProps>): JSX.Element => (
	<span className={classNames(styles.root, className)}>
		<dfn className={styles.label}>{children}</dfn>
	</span>
);

export default Term;
