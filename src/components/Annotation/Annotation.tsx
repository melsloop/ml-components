import React, { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';
import styles from './Annotation.module.css';

export interface AnnotationProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	index?: number;
	padIndex?: boolean;
	leadingChar?: string;
	indexMaxLength?: number;
	className?: string;
}

const Annotation = ({
	index,
	padIndex = true,
	leadingChar = '0',
	indexMaxLength = 2,
	children,
	className,
}: PropsWithChildren<AnnotationProps>): JSX.Element => {
	const notation = useMemo(
		() => (
			<span className={styles.notation}>
				<span className={styles.index}>
					{padIndex ? `${index}`.padStart(indexMaxLength, leadingChar) : index}
				</span>
			</span>
		),
		[padIndex, leadingChar, index, indexMaxLength],
	);

	return (
		<span className={classNames(styles.root, className)}>
			{children}
			{!Number.isNaN(index) ? notation : ''}
		</span>
	);
};

export default Annotation;
