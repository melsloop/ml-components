import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../src/components/Icon';
import icons from './helpers/icons';
import * as Icons from '@radix-ui/react-icons';

const meta = {
	title: 'Visual/Icon',
	component: Icon,
	// tags: ['autodocs'],
	args: {
		size: 15,
		color: '#000',
		icon: 'AccessibilityIcon',
	},
	argTypes: {
		size: {
			control: 'number',
		},
		color: {
			control: 'color',
		},
		icon: {
			options: icons,
			control: 'select',
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ color, size, icon }) => {
		const SelectedIcon = Icons[icon];
		return (
			<Icon
				size={size}
				color={color}
			>
				<SelectedIcon />
			</Icon>
		);
	},
};
