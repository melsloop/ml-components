import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Annotation from '../src/components/Annotation';
import Text from '../src/components/Text';

const meta = {
	title: 'Text/Annotation',
	component: Annotation,
	tags: ['autodocs'],
	args: {
		index: 1,
		leadingZero: true,
		children: 'Annotated text',
	},
} satisfies Meta<typeof Annotation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ children, ...args }) {
		return (
			<>
				<Text
					size="sm"
					variant="body1"
				>
					{children}
				</Text>
				<Annotation {...args} />
			</>
		);
	},
};
