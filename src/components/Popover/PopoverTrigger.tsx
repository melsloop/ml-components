import React, { PropsWithChildren } from 'react';
import styles from './PopoverTrigger.module.css';
import classnames from 'classnames';

export interface PopoverTriggerProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	opened?: boolean;
	className?: string;
}

const PopoverTrigger = ({
	opened,
	children,
	className,
}: PropsWithChildren<PopoverTriggerProps>): JSX.Element => (
	<span
		data-popover-state={opened ? 'open' : 'closed'}
		className={classnames(styles.root, className)}
	>
		{children}
	</span>
);

export default PopoverTrigger;
