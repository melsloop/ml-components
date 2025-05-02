import React, { PropsWithChildren } from 'react';
import Text, { headingVariants, type TextAlign } from '../Text/Text';
import styles from './Heading.module.css';
import classNames from 'classnames';

type HeadingProps = {
	level?: number;
	textAlign?: TextAlign;
	className?: string;
};

export const Heading = ({
	level = 1,
	textAlign,
	children,
}: PropsWithChildren<HeadingProps>): JSX.Element => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;
	return (
		<Tag
			role="heading"
			className={classNames(styles.root)}
		>
			<Text
				data-level={level}
				variant={headingVariants[level - 1]}
				textAlign={textAlign}
				fullWidth
				asChild
			>
				<span>{children}</span>
			</Text>
		</Tag>
	);
};

export default Heading;
