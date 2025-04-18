import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Heading from '../src/components/Heading/Heading';

const levels = [1, 2, 3, 4, 5, 6];

const meta = {
	title: 'Text/Heading',
	component: Heading,
	// tags: ['autodocs'],
	args: {
		level: 1,
		children: '',
	},
	argTypes: {
		level: {
			options: levels,
			control: 'select',
		},
	},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ level, children, textAlign }) =>
		<Heading
			level={level}
			textAlign={textAlign}
			>
			{children || `Heading ${level}`}
		</Heading>,
};

export const Headings: Story = {
	render: ({ textAlign, children }) => {
		return (
			<>
				{levels.map((level: number) =>
					<Heading
						level={level}
						textAlign={textAlign}
						key={`heading_${level}`}
					>
						{children || `Heading ${level}`}
					</Heading>
				)}
			</>
		);
	},
};
