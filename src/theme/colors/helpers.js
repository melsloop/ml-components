const adjustColor = (color, amount) => {
	return `#${color
		.replace(/^#/, '')
		.replace(/../g, (color) =>
			(
				'0' +
				Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
			).substr(-2),
		)}`;
};

const getContrastYIQ = (hexColor) => {
	const r = parseInt(hexColor.substr(1, 2), 16);
	const g = parseInt(hexColor.substr(3, 2), 16);
	const b = parseInt(hexColor.substr(5, 2), 16);
	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq >= 128 ? '#000000' : '#FFFFFF';
};

export const generateColorMap = (colorObj) => {
	const result = {};

	for (const [key, value] of Object.entries(colorObj)) {
		result[key] = {
			main: value,
			light: adjustColor(value, 50),
			dark: adjustColor(value, -50),
			contrast: getContrastYIQ(value),
		};
	}

	return result;
};
