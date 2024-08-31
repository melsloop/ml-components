import React from 'react';
import styles from './Strip.module.scss';
import classNames from 'classnames';

export interface StripProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
}

const Strip = ({ className }: StripProps) => (
	<div className={classNames(styles.root, className)} />
);

export default Strip;
