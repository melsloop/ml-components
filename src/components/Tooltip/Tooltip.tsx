import React, { PropsWithChildren, useMemo } from 'react';
import classNames from 'classnames';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import styles from './Tooltip.module.css';

export interface TooltipProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	tooltipText?: string;
	sideOffset?: number;
	opened?: boolean;
	disableHoverableContent?: boolean;
	onOpenChange?: (open: boolean) => void;
	delayDuration?: number;
	className?: string;
}

const Tooltip = ({
	tooltipText,
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
					sideOffset={sideOffset}
				>
					{tooltipText}
					<TooltipPrimitive.Arrow className={styles.arrow} />
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		),
		[tooltipText, sideOffset],
	);

	return (
		<span className={classNames(styles.root, className)}>
			<TooltipPrimitive.Provider>
				<TooltipPrimitive.Root
					defaultOpen={opened}
					onOpenChange={onOpenChange}
					delayDuration={delayDuration}
					disableHoverableContent={disableHoverableContent}
				>
					<TooltipPrimitive.Trigger asChild>
						<span>{children}</span>
					</TooltipPrimitive.Trigger>
					{tooltipText ? tooltipPortal : ''}
				</TooltipPrimitive.Root>
			</TooltipPrimitive.Provider>
		</span>
	);
};

export default Tooltip;
