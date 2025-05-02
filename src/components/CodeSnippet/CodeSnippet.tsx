import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './CodeSnippet.module.css';
import { SpacingSize } from '../../theme/types';

type CodeProps = {
	spacing?: SpacingSize;
	inline?: boolean;
	className?: string;
};

const CodeSnippet = ({
	inline,
	spacing,
	children,
	className,
}: PropsWithChildren<CodeProps>): JSX.Element => (
	<div
		className={classNames(
			styles.root,
			className,
			styles[`spacing-${spacing}`],
			{
				[styles.inline]: inline,
			},
		)}
	>
		<pre className={styles.pre}>
			<code className={styles.code}>{children}</code>
		</pre>
	</div>
);

export default CodeSnippet;
export type { CodeProps };
