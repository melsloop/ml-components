import { NestedObject } from '../types';

export const toCssVars = (obj: NestedObject, prefix = 'ml'): string => {
	const cssVars: string[] = [];

	const traverse = (obj: NestedObject, path: string[] = []): void => {
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				traverse(obj[key] as NestedObject, [...path, key]);
			} else {
				const cssVarName = `--${prefix}-${path.concat(key).join('-')}`;
				cssVars.push(`${cssVarName}: ${obj[key]};`);
			}
		}
	};

	traverse(obj);

	return cssVars.join('\n');
};
