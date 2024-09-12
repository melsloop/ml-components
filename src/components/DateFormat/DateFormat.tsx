import React from 'react';
import { format as formatDate, isValid } from 'date-fns';
import classNames from 'classnames';
import styles from './DateFormat.module.css';

export type DateFormatProps = {
	date: string;
	format?: string;
	className?: string;
};

const DateFormat = ({
	date,
	format = 'MM/dd/yy',
	className,
}: DateFormatProps): JSX.Element => {
	const val = isValid(date) ? date : new Date();

	let res;

	try {
		res = formatDate(val, format || 'MM/dd/yy');
	} catch {
		res = formatDate(val, 'MM/dd/yy');
	}

	return <time className={classNames(styles.root, className)}>{res}</time>;
};

export default DateFormat;
