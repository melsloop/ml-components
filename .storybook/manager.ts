import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
	theme: create({
		base: 'light',

		// brandImage: "/assets/logo/ml-logo-dark.png",
		brandTitle: 'ml-components',
		brandUrl: '#',
		brandTarget: '_self',
	}),
});
