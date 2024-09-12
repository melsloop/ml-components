import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Line from '../src/components/Line';
import Text from '../src/components/Text';

const meta = {
	title: 'Semantic/Line',
	component: Line,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Line>;

export default meta;

type Story = StoryObj<typeof meta>;

const lines = [
	'In a minute there is time',
	'For decisions and revisions which a minute will reverse.',
	'[...]',
	'I grow old ... I grow old ... I shall wear the bottoms of my trousers',
	'rolled.',
];

export const Primary: Story = {
	args: {
		index: 0,
	},
	render: function Render() {
		return (
			<>
				{lines.map((text, index) => (
					<Line
						index={index}
						key={`line-${index + 1}`}
					>
						<Text
							variant="body1"
							size="md"
						>
							{text}
						</Text>
					</Line>
				))}
			</>
		);
	},
};
