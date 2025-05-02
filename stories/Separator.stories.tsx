import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Separator from '../src/components/Separator';
import Text from '../src/components/Text';
import { sizeControls } from './helpers/commonControls';

const meta = {
	title: 'Visual/Separator',
	component: Separator,
	// tags: ['autodocs'],
	args: {
		orientation: 'vertical',
		size: 'md',
	},
	argTypes: {
		orientation: {
			options: ['horizontal', 'vertical'],
			control: 'select',
		},
		...sizeControls,
	},
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return <Separator {...args} />;
	},
};

export const WithText: Story = {
	render: ({ size }) => {
		return (
			<>
				<Text variant="body1">Hello</Text>
				<Separator size={size} />
				<Text variant="body1">World</Text>
			</>
		);
	},
};
