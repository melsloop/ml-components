import React, { PropsWithChildren, useMemo } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import styles from './Tooltip.module.css';

export interface TooltipProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	tooltipText?: string;
	sideOffset?: number;
	side?: 'top' | 'right' | 'bottom' | 'left';
	opened?: boolean;
	disableHoverableContent?: boolean;
	onOpenChange?: (open: boolean) => void;
	delayDuration?: number;
	className?: string;
}

const Tooltip = ({
	tooltipText,
	side,
	sideOffset,
	delayDuration = 0,
	opened,
	disableHoverableContent,
	children,
	onOpenChange,
	className,
}: PropsWithChildren<TooltipProps>): JSX.Element => {
	const tooltipPortal = useMemo(
		() => (
			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					className={styles.content}
					side={side}
					sideOffset={sideOffset}
				>
					{tooltipText}
					<TooltipPrimitive.Arrow className={styles.arrow} />
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		),
		[tooltipText, sideOffset, side, opened],
	);

	return (
		<span className={classNames(styles.root, className)}>
			<TooltipPrimitive.Provider>
				<TooltipPrimitive.Root
					open={opened}
					onOpenChange={onOpenChange}
					delayDuration={delayDuration}
					disableHoverableContent={disableHoverableContent}
				>
					<TooltipPrimitive.Trigger asChild>
						<span className={styles.children}>{children}</span>
					</TooltipPrimitive.Trigger>
					{tooltipText ? tooltipPortal : ''}
				</TooltipPrimitive.Root>
			</TooltipPrimitive.Provider>
		</span>
	);
};

export default Tooltip;
