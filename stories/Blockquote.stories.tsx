import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';
import Blockquote from '../src/components/Blockquote/Blockquote';

const meta = {
	title: 'Text/Blockquote',
	component: Blockquote,
	// tags: ['autodocs'],
	args: {
		children:
			"To be, or not to be- that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them.",
		cite: 'Hamlet · III i 64',
		citeSrc:
			'https://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=hamlet&Act=3&Scene=1&Scope=scene&LineHighlight=1749#1740',
	},
	argTypes: {},
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ children, cite, citeSrc }) => (
		<Blockquote
			cite={cite}
			citeSrc={citeSrc}
		>
			<Text variant="body1">{children}</Text>
		</Blockquote>
	),
};
