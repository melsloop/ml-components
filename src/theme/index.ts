import globals from './globals';
import { toCssVars } from './helpers';
import { ThemeOptions } from './types';

export const getTheme = (theme = {}, options?: ThemeOptions) => {
	return `:root {
/* globals */
${options?.omitGlobals ? '' : toCssVars(globals)}
/* theme overrides */
${toCssVars(theme)}
}`;
};
