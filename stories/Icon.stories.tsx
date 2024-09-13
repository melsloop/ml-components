import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../src/components/Icon';
import { sizeControls } from './helpers/commonControls';
import icons from './helpers/icons';

const meta = {
	title: 'Visual/Icon',
	component: Icon,
	tags: ['autodocs'],
	args: {
		icon: 'FileIcon',
		size: 'md',
	},
	argTypes: {
		icon: {
			options: icons,
			control: 'select',
		},
		color: {
			control: 'color',
		},
		...sizeControls,
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render(args) {
		return <Icon {...args} />;
	},
};
