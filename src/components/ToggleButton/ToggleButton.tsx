import type { WithDataAttributes } from '../types';
import type { ButtonProps } from '../Button/Button';

import React, {
	PropsWithChildren,
	useCallback,
	useMemo,
	useState,
	cloneElement,
	isValidElement,
} from 'react';
import * as ToggleRoot from '@radix-ui/react-toggle';
import classnames from 'classnames';
import styles from './ToggleButton.module.css';

export interface ToggleButtonProps {
	title: string;
	isToggled?: boolean;
	onClick?: () => void;
	className?: string;
}

const ToggleButton = ({
	isToggled,
	title,
	children,
	onClick,
	className,
	...props
}: PropsWithChildren<ToggleButtonProps>): JSX.Element => {
	const [toggled, setToggled] = useState<boolean>(!!isToggled);

	const onToggle = useCallback(() => setToggled(!toggled), [toggled]);

	const item = useMemo(
		() =>
			React.Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(
						child as React.ReactElement<WithDataAttributes<ButtonProps>>,
						{
							'data-selected': toggled,
						},
					);
				}
				return child;
			}),
		[children, toggled],
	);

	return (
		<ToggleRoot.Root
			onPressedChange={onClick}
			defaultPressed={isToggled}
			title={title}
			className={classnames(styles.root, className)}
			asChild
			{...props}
		>
			<span onClick={onToggle}>{item}</span>
		</ToggleRoot.Root>
	);
};

export default ToggleButton;
