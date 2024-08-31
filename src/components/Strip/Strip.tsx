import React from 'react';
import classnames from 'classnames';
import styles from './Strip.module.css';

export interface StripProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
}

const Strip = ({ className }: StripProps) => (
	<div className={classnames(styles.root, className)} />
);

export default Strip;
