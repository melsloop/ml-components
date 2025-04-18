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

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">

export const createThemeStyle = () => {
	const fonts = globals.font;
	console.log(fonts);
};
