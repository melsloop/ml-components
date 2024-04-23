import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Scrollbar from './Scrollbar';

const meta = {
	title: 'Scrollbar',
	component: Scrollbar,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Scrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
	args: {
		children: [],
		textDirection: 'right',
	},
	render: function Render() {
		return (
			<Scrollbar
				height="100vh"
				textDirection="right"
			>
				<div style={{ height: '1000px' }}>
					<div>Content</div>
				</div>
			</Scrollbar>
		);
	},
};

export const Desktop: Story = BaseStory;

export const Mobile: Story = {
	...BaseStory,
	parameters: {
		viewport: {
			defaultViewport: 'iphonex',
		},
	},
};
