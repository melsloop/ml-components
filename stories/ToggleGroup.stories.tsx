import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ToggleGroup from '../src/components/ToggleGroup';
import Button from '../src/components/Button';
import { fullWidthControls } from './helpers/commonControls';

const meta = {
	title: 'Button/ToggleGroup',
	component: ToggleGroup,
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
			</ToggleGroup>
		);
	},
};
