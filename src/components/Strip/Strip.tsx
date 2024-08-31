import React from 'react';
import classNames from 'classnames';
import styles from './Strip.module.css';

export interface StripProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
}

const Strip = ({ className }: StripProps) => (
	<div className={classNames(styles.root, className)} />
);

export default Strip;
