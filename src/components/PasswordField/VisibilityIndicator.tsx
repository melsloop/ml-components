import React, { PropsWithChildren } from 'react';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import TextFieldSlot from '../TextField/TextFieldSlot';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './VisibilityInidicator.module.css';

type VisibilityIndicatorProps = {
	visibility?: boolean;
	onClick?: (e: React.MouseEvent) => void;
	className?: string;
};

const VisibilityIndicator = ({
	visibility,
	onClick,
	className,
}: PropsWithChildren<VisibilityIndicatorProps>) => (
	<TextFieldSlot
		slot="suffix"
		className={classNames(styles.root, className)}
	>
		<span
			className={styles.revealButton}
			onMouseDown={onClick}
		>
			<Icon className={styles.icon}>
				{visibility ? <EyeNoneIcon /> : <EyeOpenIcon />}
			</Icon>
		</span>
	</TextFieldSlot>
);

VisibilityIndicator.displayName = 'VisibilityIndicator';

export default VisibilityIndicator;
