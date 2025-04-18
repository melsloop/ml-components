import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../src/components/Popover';

const meta = {
	title: 'Popper/Popover',
	component: Popover,
	parameters: {
		layout: 'centered',
	},
	// tags: ['autodocs'],
	args: {
		trigger: 'Trigger',
		locale: 'en',
		side: 'right',
	},
	argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ trigger, locale, side, ...args }) => {
		return (
			<Popover
				trigger={trigger}
				locale={locale}
				side={side}
				{...args}
			>
				Content
			</Popover>
		);
	},
};
