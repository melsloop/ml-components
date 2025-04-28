import type {
	RadiusSize,
	SpacingSize,
	ThemeComponentSize,
} from '../../theme/types';

import React, { PropsWithChildren } from 'react';
import Text from '../Text';
import classNames from 'classnames';
import styles from './Figure.module.css';

type FigureProps = {
	caption?: string;
	figureId?: string;
	size?: ThemeComponentSize;
	radius?: RadiusSize;
	spacing?: SpacingSize;
	bordered?: boolean;
	fullWidth?: boolean;
	className?: string;
};

const Figure = ({
	caption,
	figureId,
	bordered,
	fullWidth,
	size,
	spacing,
	radius,
	children,
	className,
	...rest
}: PropsWithChildren<FigureProps>) => (
	<span
		className={classNames(
			styles.root,
			styles[`size-${size}`],
			styles[`radius-${radius}`],
			styles[`spacing-${spacing}`],
			{
				[styles.fullWidth]: fullWidth,
				[styles.bordered]: bordered,
			},
			className,
		)}
		{...rest}
	>
		{/* {elementId && <a id={elementId}></a>} */}
		{figureId && <a id={figureId}></a>}
		<figure className={styles.figure}>{children}</figure>
		{caption && (
			<Text asChild>
				<figcaption className={styles.caption}>{caption}</figcaption>
			</Text>
		)}
	</span>
);

export default Figure;
export type { FigureProps };
