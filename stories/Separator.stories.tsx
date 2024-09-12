import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Separator from '../src/components/Separator';
import Text from '../src/components/Text';
import { sizeControls } from './commonControls';

const meta = {
	title: 'Separator',
	component: Separator,
	tags: ['autodocs'],
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
	render: function Render(args) {
		return <Separator {...args} />;
	},
};

export const WithText: Story = {
	render: function Render({ size, ...args }) {
		return (
			<>
				<Text
					variant="body1"
					size={size}
				>
					Hello
				</Text>
				<Separator
					size={size}
					{...args}
				/>
				<Text
					variant="body1"
					size={size}
					italics
				>
					World
				</Text>
			</>
		);
	},
};
