import React from 'react';
import { format as formatDate, isValid } from 'date-fns';
import classNames from 'classnames';
import styles from './DateFormat.module.css';

export type DateFormatProps = {
	value: string | Date;
	template?: string;
	className?: string;
};

const DEFAULT_DATE_TEMPLATE = 'MM/dd/yy';

const DateFormat = ({
	value,
	template,
	className,
}: DateFormatProps): JSX.Element => (
	<time className={classNames(styles.root, className)}>
		{formatDate(value, template || DEFAULT_DATE_TEMPLATE)}
	</time>
);

export default DateFormat;
