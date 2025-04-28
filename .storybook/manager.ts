import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import { useStorybookApi } from '@storybook/manager-api';

addons.setConfig({
	theme: create({
		base: 'light',

		// brandImage: "/assets/logo/ml-logo-dark.png",
		brandTitle: 'ml-components',
		brandUrl: '#',
		brandTarget: '_self',
	}),
});
