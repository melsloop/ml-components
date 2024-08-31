import React, { PropsWithChildren } from 'react';
import * as ToggleRoot from '@radix-ui/react-toggle';
import classNames from 'classnames';
import styles from './ToggleButton.module.scss';
import Button from '../Button';

type ToggleButtonProps = {
	title: string;
	isToggled: boolean;
	onClick?: () => void;
	className?: string;
};

const ToggleButton = ({
	isToggled,
	title,
	children,
	onClick,
	className,
	...rest
}: PropsWithChildren<ToggleButtonProps>): JSX.Element => (
	<div className={styles.root}>
		<ToggleRoot.Root
			onPressedChange={onClick}
			defaultPressed={isToggled}
			title={title}
			className={classNames(styles.root, className)}
			asChild
			{...rest}
		>
			<Button asChild className={styles.button}>
				<span className={styles.item}>{children}</span>
			</Button>
		</ToggleRoot.Root>
	</div>
);

export default ToggleButton;
export type { ToggleButtonProps };
