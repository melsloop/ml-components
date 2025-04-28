import React, { cloneElement, isValidElement } from 'react';
import classNames from 'classnames';
import styles from './Icon.module.css';

export interface IconProps {
	size?: number;
	color?: string;
	className?: string;
}

type IconComponentProps = IconProps & {
	children?: React.ReactNode;
};

const Icon = ({
	size,
	color,
	children,
	className,
	...rest
}: IconComponentProps) => {
	const childrenWithProps = React.Children.map(children, (child) => {
		if (isValidElement<{ className?: string }>(child)) {
			return cloneElement(child, {
				color: color,
				width: size,
				height: size,
				className: styles.icon,
			} as React.SVGProps<SVGSVGElement>);
		}
		return child;
	});

	return (
		<span
			className={classNames(styles.root, className)}
			{...rest}
		>
			{childrenWithProps}
		</span>
	);
};

export default Icon;
