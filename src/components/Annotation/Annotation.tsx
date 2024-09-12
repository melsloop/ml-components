import React from 'react';
import { addLeadingZero } from './helpers';
import classNames from 'classnames';
import styles from './Annotation.module.css';

export interface AnnotationProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	index: number;
	leadingZero?: boolean;
	className?: string;
}

const Annotation = ({
	index,
	leadingZero = true,
	className,
}: AnnotationProps): JSX.Element => (
	<span className={classNames(styles.root, className)}>
		<span
			className={styles.content}
			data-prefix-content={leadingZero ? addLeadingZero(index) : ''}
			data-seq={index}
		></span>
	</span>
);

export default Annotation;
