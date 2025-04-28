import React, { PropsWithChildren } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import styles from './DateFormat.module.css';

export type DateFormatProps = {
	value: string | Date;
	template?: string;
	children: string;
	className?: string;
};

export const DEFAULT_DATE_TEMPLATE = 'MM/dd/yy';

const DateFormat = ({
	template,
	children,
	className,
}: PropsWithChildren<DateFormatProps>): JSX.Element => (
	<time className={classNames(styles.root, className)}>
		{format(children, template || DEFAULT_DATE_TEMPLATE)}
	</time>
);

export default DateFormat;
