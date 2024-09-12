// import { createCssVar } from "../../helpers";

// const generateCssVars = (prefix, values) => {
//   let cssVars = "";

//   for (const [key, value] of Object.entries(values)) {
//     const { main, light, dark, contrast } = value;

//     cssVars += `${createCssVar(prefix, `${key}-main`, main)}\n`;
//     cssVars += `${createCssVar(prefix, `${key}-light`, light)}\n`;
//     cssVars += `${createCssVar(prefix, `${key}-dark`, dark)}\n`;
//     cssVars += `${createCssVar(prefix, `${key}-contrast`, contrast)}\n`;
//   }

//   return cssVars;
// };

export default {
	color: {
		surface: {
			main: '#e6e3d8',
			light: '#f2efe4',
			dark: '#ccc9c0',
			contrast: '#20201e',
		},
		dark: {
			main: '#666560',
			light: '#a6a49c',
			dark: '#434440',
			contrast: '#fcfbf9',
		},
		primary: {
			primary0: '#f178b6',
			primary1: '#fd658a',
			primary2: '#bd5e91',
			primary3: '#70538a',
			primary4: '#4e4a7a',
		},
		accent: {
			accent1: '#3770c5',
			accent2: '#274f8c',
			accent3: '#1a355f',
			accent4: '#00173a',
		},
	},
	border: {
		sm: '1px',
		md: '2px',
		lg: '3px',
		xl: '4px',
	},
	padding: {
		sm: '0.2em',
		md: '0.5em',
		lg: '1em',
	},
};
