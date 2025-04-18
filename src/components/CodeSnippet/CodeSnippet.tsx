import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './CodeSnippet.module.css';

type CodeProps = {
	inline?: boolean;
	className?: string;
};

const CodeSnippet = ({
	inline,
	children,
	className,
}: PropsWithChildren<CodeProps>): JSX.Element => (
	<div
		className={classNames(styles.root, className, {
			[styles.inline]: inline,
		})}
	>
		<pre className={styles.pre}>
			<code className={styles.code}>{children}</code>
		</pre>
	</div>
);

export default CodeSnippet;
export type { CodeProps };
