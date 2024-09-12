import type {
	RadiusSize,
	ShadowSize,
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
	shadow?: ShadowSize;
	radius?: RadiusSize;
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
	shadow,
	radius,
	children,
	className,
	...props
}: PropsWithChildren<FigureProps>) => (
	<span
		className={classNames(styles.root, className)}
		data-bordered={bordered}
		data-radius={radius}
		data-shadow={shadow}
		data-full-width={fullWidth}
		data-size={size}
		{...props}
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
