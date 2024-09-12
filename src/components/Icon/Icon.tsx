import React from 'react';
import * as Icons from '@radix-ui/react-icons';
import classnames from 'classnames';
import styles from './Icon.module.css';

export interface IconProps {
	icon?: keyof typeof Icons;
	size?: string;
	color?: string;
	className?: string;
}

const Icon = ({ icon, size, color, className, ...props }: IconProps) => {
	if (!icon) return null;

	const SelectedIcon = Icons[icon];

	if (!SelectedIcon) return null;

	return (
		<span
			data-size={size}
			className={classnames(styles.root, className)}
			{...props}
		>
			<SelectedIcon color={color} />
		</span>
	);
};

export default Icon;
