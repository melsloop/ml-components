import React from 'react';
import type { Preview } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!./../src/theme.scss';

const preview: Preview = {
	decorators: [
		(Story) => {
			return (
				<div data-ml-theme="light" data-locale="en">
					{Story()}
				</div>
			);
		},
	],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;