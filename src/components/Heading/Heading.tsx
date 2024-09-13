import React, { PropsWithChildren } from 'react';
import styles from './Heading.module.css';
import classNames from 'classnames';
import Text from '../Text';
import { HeadingVariant } from '../Text/Text';
import { ComponentSize } from '../../theme/types';

type HeadingProps = {
	level?: number;
	size?: ComponentSize;
	className?: string;
};

export const Heading = ({
	level = 1,
	size = 'md',
	className,
	children,
}: PropsWithChildren<HeadingProps>): JSX.Element => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;
	return (
		<Text
			size={size}
			variant={Tag as HeadingVariant}
			asChild
		>
			<Tag
				role="heading"
				className={classNames(styles.root, className)}
			>
				{children}
			</Tag>
		</Text>
	);
};

export default Heading;
