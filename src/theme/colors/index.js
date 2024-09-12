import palette from './palette';
import { generateColorMap } from './helpers';
import { createCssVar } from '../../helpers';
import { CSS_PREFIX } from '../../consts';

const globalColorPrefix = `${CSS_PREFIX}-global-color`;

const generateColorVars = (prefix, values) => {
	let cssVars = '';

	for (const [key, value] of Object.entries(values)) {
		const { main, light, dark, contrast } = value;

		cssVars += `${createCssVar(prefix, `${key}-main`, main)}\n`;
		cssVars += `${createCssVar(prefix, `${key}-light`, light)}\n`;
		cssVars += `${createCssVar(prefix, `${key}-dark`, dark)}\n`;
		cssVars += `${createCssVar(prefix, `${key}-contrast`, contrast)}\n`;
	}

	return cssVars;
};

const colorMap = generateColorMap(palette);
console.log(Object.keys(colorMap)).map((key) => [key, colorMap[key]]);

export default generateColorVars(globalColorPrefix, colorMap);
