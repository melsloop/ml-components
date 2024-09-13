import React, { PropsWithChildren, useEffect, useState } from 'react';
import styles from './Spinner.module.css';
import classNames from 'classnames';

export interface LoadingIndicatorProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	delay: number;
	label?: string;
	animation?: 'rotation' | string;
	animationTimingFn: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

const LoadingIndicator = ({
	delay,
	animation = 'rotation',
	animationTimingFn = 'linear',
	children,
	className,
}: PropsWithChildren<LoadingIndicatorProps>): JSX.Element => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		let removed = false;

		setTimeout(() => {
			if (!removed) {
				setShow(true);
			}
		}, Math.round(delay));

		return () => {
			removed = true;
		};
	}, [delay]);

	return (
		<div
			data-animation={animation}
			data-animation-timing-function={animationTimingFn}
			data-visible={show}
			className={classNames(styles.root, className)}
		>
			<div className={styles.spinner}>{children}</div>
		</div>
	);
};

export default LoadingIndicator;
