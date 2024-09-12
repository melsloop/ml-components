import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ToggleGroup from '../src/components/ToggleGroup';
import Button from '../src/components/Button';
import { fullWidthControls } from './commonControls';

const meta = {
	title: 'ToggleGroup',
	component: ToggleGroup,
	// parameters: {
	// 	viewport: {
	// 		viewports: INITIAL_VIEWPORTS,
	// 	},
	// },
	tags: ['autodocs'],
	args: {
		defaultValue: '',
		orientation: 'horizontal',
		dir: 'ltr',
		loop: false,
	},
	argTypes: {
		dir: {
			options: ['ltr', 'rtl'],
			control: 'select',
		},
		orientation: {
			options: ['horizontal', 'vertical'],
			control: 'select',
		},
		...fullWidthControls,
	},
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ ...args }) {
		return (
			<ToggleGroup {...args}>
				<Button
					variant="contained"
					mode="primary"
					asChild
					data-value="1"
				>
					Item 1
				</Button>
				<Button
					variant="contained"
					mode="primary"
					asChild
					data-value="2"
				>
					Item 2
				</Button>
				<Button
					variant="contained"
					mode="primary"
					asChild
					data-value="3"
				>
					Item 3
				</Button>
				<Button
					variant="contained"
					mode="primary"
					asChild
					data-value="4"
				>
					Item 4
				</Button>
			</ToggleGroup>
		);
	},
};
