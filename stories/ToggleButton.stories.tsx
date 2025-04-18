import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ToggleButton from '../src/components/ToggleButton';
import Button from '../src/components/Button';
import { sizeControls } from './helpers/commonControls';

const meta = {
	title: 'Button/ToggleButton',
	component: ToggleButton,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	// tags: ['autodocs'],1
	args: {
		children: 'Click',
		isPressed: false,
	},
	argTypes: {
		...sizeControls,
	},
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ children, ...args }) => {
		return (
			<ToggleButton {...args}>
				<Button
					size="md"
					variant="outline"
					mode="primary"
				>
					{children}
				</Button>
			</ToggleButton>
		);
	},
};
