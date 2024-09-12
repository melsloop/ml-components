import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Heading from '../src/components/Heading/Heading';
import { sizeControls } from './commonControls';

const levels = [1, 2, 3, 4, 5, 6];

const meta = {
	title: 'Semantic/Heading',
	component: Heading,
	tags: ['autodocs'],
	args: {
		level: 1,
		size: 'md',
		children: '',
	},
	argTypes: {
		level: {
			options: levels,
			control: 'select',
		},
		...sizeControls,
	},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: function Render({ level, size, children, ...args }) {
		return (
			<Heading
				level={level}
				size={size}
				{...args}
			>
				{children ? children : `Heading ${level}`}
			</Heading>
		);
	},
};

export const Headings: Story = {
	render: function Render({ size }) {
		return (
			<>
				{levels.map((level: number) => {
					return (
						<Heading
							level={level}
							size={size}
							key={`heading${level}`}
						>
							Heading {level}
						</Heading>
					);
				})}
			</>
		);
	},
};
