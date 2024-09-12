import React, { PropsWithChildren } from 'react';
import Button from '../../Button';
import PopoverToolbarItem from './ToolbarItem';
import styles from './ToolbarButton.module.css';

type ToolbarButtonProps = {
	title: string;
	onClick: () => void;
	className?: string;
};

const ToolbarButton = ({
	title,
	onClick,
	children,
}: PropsWithChildren<ToolbarButtonProps>): JSX.Element => (
	<PopoverToolbarItem>
		<Button
			variant="contained"
			mode="primary"
			size="xs"
			title={title}
			onClick={onClick}
			className={styles.root}
		>
			{children}
		</Button>
	</PopoverToolbarItem>
);

export default ToolbarButton;
