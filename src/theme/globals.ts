import type {
	ThemeComponentSize,
	ThemeShadow,
	ThemeRadius,
	ThemeSpacing,
	ThemeBorder,
} from './types';

const color = {
	surface: {
		main: '#e6e3d8',
		light: '#f2efe4',
		dark: '#ccc9c0',
		contrast: '#20201e',
	},
	overlay: {
		main: '#666560',
		light: '#a6a49c',
		dark: '#434440',
		contrast: '#fcfbf9',
	},
	primary2: {
		primary0: '#f178b6',
		primary1: '#fd658a',
		primary2: '#bd5e91',
		primary3: '#70538a',
		primary4: '#4e4a7a',
	},
	primary: {
		main: '#274f8c',
		light: '#3770c5',
		dark: '#1a355f',
		highlight: '#00173a',
		contrast: '#f2efe4',
	},
	secondary: {
		main: '#f178b6',
		light: '#fd658a',
		dark: '#bd5e91',
		highlight: '#70538a',
		contrast: '#4e4a7a',
	},
};

const font = {
	font1: {
		family: 'Roboto Slab',
		weight: {
			thin: 100,
			'extra-light': 200,
			light: 300,
			regular: 400,
			medium: 500,
			'semi-bold': 600,
			bold: 700,
			'extra-bold': 800,
			black: 900,
		},
	},
	font2: {
		family: 'Assistant',
		weight: {
			thin: 100,
			'extra-light': 200,
			light: 300,
			regular: 400,
			medium: 500,
			'semi-bold': 600,
			bold: 700,
			'extra-bold': 800,
			black: 900,
		},
	},
	font3: {
		family: 'Tahoma',
		weight: {
			thin: 100,
			'extra-light': 200,
			light: 300,
			regular: 400,
			medium: 500,
			'semi-bold': 600,
			bold: 700,
			'extra-bold': 800,
			black: 900,
		},
	},
};

const radius: ThemeRadius = {
	none: '0px',
	sm: '4px',
	md: '6px',
	lg: '8px',
};

const border: ThemeBorder = {
	none: '0px',
	xs: '1px',
	sm: '2px',
	md: '3px',
	lg: '4px',
};

const size: ThemeComponentSize = {
	none: '',
	xs: '0.75em',
	sm: '.85em',
	md: '1em',
	lg: '1.15em',
	xl: '1.25em',
	xxl: '1.75em',
};

const spacing: ThemeSpacing = {
	none: '0',
	xs: '0.25em',
	sm: '0.5em',
	md: '1em',
	lg: '1.25em',
	xl: '1.5em',
};

const shadow: ThemeShadow = {
	none: 'none',
	sm: 'hsl(206deg 22% 7% / 30%) 0 5px 15px -5px, hsl(206deg 22% 7% / 15%) 0 5px 10px -7px',
	md: 'hsl(206deg 22% 7% / 35%) 0 10px 38px -10px, hsl(206deg 22% 7% / 20%) 0 10px 20px -15px',
	lg: 'hsl(206deg 22% 7% / 40%) 0 15px 50px -5px, hsl(206deg 22% 7% / 25%) 0 15px 30px -10px',
};

export default {
	color,
	font,
	radius,
	border,
	size,
	spacing,
	shadow,
};
