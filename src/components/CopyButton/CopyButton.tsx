import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { InputProps } from '../Form/types';
import Tooltip from '../Tooltip';
import Button from '../Button';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './CopyButton.module.css';

type CopyButtonProps = {
	inputRef?: React.RefObject<HTMLInputElement>;
	tooltipSide?: 'top' | 'right' | 'bottom' | 'left';
	tooltipTextDefault?: string;
	tooltipTextActive?: string;
	tooltipTimeoutMs?: number;
} & InputProps;

const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
	(
		{
			inputRef,
			tooltipSide = 'right',
			tooltipTextDefault = 'Copy',
			tooltipTextActive = 'Copied!',
			tooltipTimeoutMs = 1000,
			className,
		},
		ref,
	) => {
		const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

		const [tooltipText, setTooltipText] = useState(tooltipTextDefault);
		const [tooltipVisibility, setTooltipVisibility] = useState(false);
		const [copied, setCopied] = useState(false);

		const copyToClipboard = () =>
			navigator.clipboard.writeText(inputRef?.current?.value || '');

		const onCopy = (
			e: React.SyntheticEvent<HTMLButtonElement | MouseEvent>,
		) => {
			if (copied) return;

			e.preventDefault();
			e.stopPropagation();

			copyToClipboard();
			setTooltipText(tooltipTextActive);
			setCopied(true);

			inputRef?.current?.dispatchEvent(new CustomEvent('copied'));
		};

		useEffect(() => {
			if (!copied) return;

			clearTimeout(timeoutRef.current);

			timeoutRef.current = setTimeout(() => {
				setCopied(false);
				setTooltipText(tooltipTextDefault);
			}, tooltipTimeoutMs);
		}, [copied, timeoutRef]);

		return (
			<Tooltip
				tooltipText={tooltipText}
				opened={tooltipVisibility}
				side={tooltipSide}
			>
				<Button
					variant="ghost"
					className={classNames(styles.root, className, {
						[styles.highlight]: copied,
					})}
					onClick={onCopy}
					onMouseOver={() => setTooltipVisibility(true)}
					onMouseOut={() => setTooltipVisibility(false)}
					radius="sm"
					ref={ref}
				>
					<div className={styles.iconWrapper}>
						<Icon className={classNames(styles.icon, styles.checkIcon)}>
							<CheckIcon />
						</Icon>
						<Icon className={classNames(styles.icon, styles.copyIcon)}>
							<CopyIcon />
						</Icon>
					</div>
				</Button>
			</Tooltip>
		);
	},
);

CopyButton.displayName = 'CopyButton';

export default CopyButton;
