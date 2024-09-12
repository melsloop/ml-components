import React, { PropsWithChildren } from 'react';
import Text from '../Text';
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
						<Text asChild>
							<Link
								title={cite}
								href={citeSrc}
								target="_blank"
							>
								{cite}
							</Link>
						</Text>
					</span>
				</cite>
			);
		} else {
			citeNode = (
				<cite className={styles.cite}>
					<span className={styles.citeContent}>
						<Text>{cite}</Text>
					</span>
				</cite>
			);
		}
	}

	return (
		<span className={classNames(styles.root, className)}>
			<blockquote className={styles.blockquote}>
				<span className={styles.content}>
					<Text>{children}</Text>
				</span>
				{citeNode}
			</blockquote>
		</span>
	);
};

export default Blockquote;
