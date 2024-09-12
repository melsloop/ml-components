import React, { PropsWithChildren, useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { getIcon } from '../icons';
import Button from '../Button';
import PopoverTrigger from './PopoverTrigger';
import PopoverDialog from './PopoverDialog';
import styles from './Popover.module.css';
import PopoverToolbarItem from './ToolbarItem/ToolbarItem';

export interface CustomPopoverProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	trigger: React.ReactNode;
	side: 'top' | 'right' | 'bottom' | 'left';
	locale: string;
	toolbarItems?: React.ReactNode[];
	open?: boolean;
	'data-testid'?: string;
}

const Popover = ({
	open,
	trigger,
	side,
	locale,
	toolbarItems,
	children,
	'data-testid': dataTestId,
}: PropsWithChildren<CustomPopoverProps>) => {
	const [visible, setVisible] = useState(false);

	const isOpen = open || visible;

	return (
		<PopoverPrimitive.Root
			onOpenChange={(opened) => setVisible(opened)}
			open={isOpen}
		>
			<PopoverPrimitive.Trigger
				data-testid={dataTestId}
				className={styles.trigger}
			>
				<PopoverTrigger opened={isOpen}>{trigger}</PopoverTrigger>
			</PopoverPrimitive.Trigger>

			<PopoverPrimitive.Portal>
				<PopoverPrimitive.Content
					side={side}
					data-locale={locale}
					className={styles.dialog}
				>
					<PopoverDialog>
						{toolbarItems && (
							<div
								role="toolbar"
								className={styles.toolbar}
							>
								<div className={styles.panel}>{toolbarItems}</div>
								<div className={styles.closeButton}>
									<PopoverToolbarItem>
										<PopoverPrimitive.Close asChild>
											<Button
												variant="contained"
												mode="primary"
												size="xs"
												onClick={() => setVisible(false)}
												className={styles.close}
											>
												{getIcon('close')}
											</Button>
										</PopoverPrimitive.Close>
									</PopoverToolbarItem>
								</div>
							</div>
						)}
						{children}
					</PopoverDialog>
					<PopoverPrimitive.Arrow />
				</PopoverPrimitive.Content>
			</PopoverPrimitive.Portal>
		</PopoverPrimitive.Root>
	);
};

export default Popover;
