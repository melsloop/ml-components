import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Strip from '../src/components/Strip';

const meta = {
	title: 'Visual/Strip',
	component: Strip,
	// parameters: {
	// 	viewport: {
	// 		viewports: INITIAL_VIEWPORTS,
	// 	},
	// },
	tags: ['autodocs'],
	args: {},
	argTypes: {},
} satisfies Meta<typeof Strip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render() {
		return <Strip />;
	},
};
