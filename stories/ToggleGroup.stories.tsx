import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ToggleGroup from '../src/components/ToggleGroup';
import { fullWidthControls } from './helpers/commonControls';

const meta = {
	title: 'Button/ToggleGroup',
	component: ToggleGroup,
	// tags: ['autodocs'],
	args: {
		defaultValue: '',
		orientation: 'horizontal',
		direction: 'ltr',
		loop: false,
	},
	argTypes: {
		direction: {
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
	render: ({ defaultValue, direction, orientation, fullWidth, bordered, radius, shadow, size, spacing }) => {
		return (
			<ToggleGroup
				defaultValue={defaultValue}
				direction={direction}
				orientation={orientation}
				size={size}
				bordered={bordered}
				radius={radius}
				shadow={shadow}
				spacing={spacing}
				fullWidth={fullWidth}
			>
				<span data-value="1">EN</span>
				<span data-value="2">ע</span>
				<span data-value="3">Item 3</span>
			</ToggleGroup>
		);
	},
};
