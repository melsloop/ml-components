import React, { PropsWithChildren } from 'react';
import Link from '../Link';
import styles from './Blockquote.module.css';
import classNames from 'classnames';

export type BlockquoteProps = {
	cite?: string;
	citeSrc?: string;
	className?: string;
};

const Blockquote = ({
	cite,
	citeSrc,
	children,
	className,
}: PropsWithChildren<BlockquoteProps>): JSX.Element => {
	let citeNode = null;

	if (cite) {
		if (citeSrc) {
			citeNode = (
				<cite className={styles.cite}>
					<span className={styles.citeContent}>
						<Link
							title={cite}
							href={citeSrc}
							target="_blank"
						>
							{cite}
						</Link>
					</span>
				</cite>
			);
		} else {
			citeNode = (
				<cite className={styles.cite}>
					<span className={styles.citeContent}>{cite}</span>
				</cite>
			);
		}
	}

	return (
		<span className={classNames(styles.root, className)}>
			<blockquote className={styles.blockquote}>
				<span className={styles.content}>{children}</span>
				{citeNode}
			</blockquote>
		</span>
	);
};

export default Blockquote;
