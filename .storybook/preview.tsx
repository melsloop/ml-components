import React from 'react';
import type { Preview } from '@storybook/react';
import { makeDecorator } from 'storybook/internal/preview-api';
import { getTheme } from '../src/theme';
import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';
import { Theme, ThemePanel } from '@radix-ui/themes';

const themeData = {
	light: {
		id: 'light',
		backgroundColor: '#fff',
	},
	dark: {
		id: 'dark',
		backgroundColor: '#181a1c',
	},
};

const clearThemeStyle = () => {
	document.documentElement.querySelector('#ml-style')?.remove();
};

export const createThemeStyle = (themeName: string, themeObj: Record<string, any>) => {
	const mlStyle = document.createElement('style');
	mlStyle.id = 'ml-style';
	mlStyle.innerHTML = getTheme(themeObj);
	document.documentElement.querySelector('body')?.prepend(mlStyle);
	document.documentElement.setAttribute('data-ml-theme', themeName);
};

export const withTheme = makeDecorator({
	name: 'withTheme',
	parameterName: '',
	skipIfNoParametersOrOptions: false,
	wrapper: (getStory, context) => {
		const backgroundColorValue = context.globals?.backgrounds?.value;
		const backgroundColorOptions = context.parameters?.backgrounds?.values;
		const themeName =
			backgroundColorOptions.find(({ value }) => value === backgroundColorValue)
				?.name || 'light';

		clearThemeStyle();
		createThemeStyle(themeName, themeName === 'light' ? lightTheme : darkTheme);

		return getStory(context);
	},
});

const preview: Preview = {
	decorators: [
  (Story: React.FC) => {
    return (
        <Story />
      // <Theme>
      //   <Story />
      //   <ThemePanel defaultOpen={false} />
      // </Theme>
    );
  },
	withTheme(), (Story) => Story(),
],
	parameters: {
		backgrounds: {
			values: [
				{
					name: themeData.light.id,
					value: themeData.light.backgroundColor,
				},
				{
					name: themeData.dark.id,
					value: themeData.dark.backgroundColor,
				},
			],
		},
	},
};

export default preview;
