import React, { Children, cloneElement, isValidElement } from 'react';

export const mapSlottedContent = (
	slotName: string,
	children: React.ReactNode,
	props: Record<string, unknown>,
) => {
	return Children.map(children, (child) => {
		if (
			isValidElement(child) &&
			typeof child.type !== 'string' &&
			'displayName' in child.type &&
			child.type.displayName === slotName
		) {
			return cloneElement(child, {
				...props,
				...child.props,
			});
		}
		return child;
	});
};
