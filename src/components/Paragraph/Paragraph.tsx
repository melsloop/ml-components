import React, { PropsWithChildren } from 'react';
import styles from './Paragraph.module.css';
import classNames from 'classnames';

type ParagraphProps = {
	className?: string;
};

export const Paragraph = ({
	children,
	className,
}: PropsWithChildren<ParagraphProps>): JSX.Element => {
	if (!children) {
		return <></>;
	}

	return <p className={classNames(styles.root, className)}>{children}</p>;
};

export default Paragraph;

export type { ParagraphProps };
