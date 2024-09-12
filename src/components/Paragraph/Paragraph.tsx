import React, { PropsWithChildren } from 'react';
import Text from '../Text';
import styles from './Paragraph.module.css';
import classNames from 'classnames';

type ParagraphProps = {
	className?: string;
};

export const Paragraph = ({
	children,
	className,
}: PropsWithChildren<ParagraphProps>): JSX.Element => (
	<p className={classNames(styles.root, className)}>
		<Text variant="body1">{children}</Text>
	</p>
);

export default Paragraph;
export type { ParagraphProps };
