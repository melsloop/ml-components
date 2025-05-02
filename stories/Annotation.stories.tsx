import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Annotation from '../src/components/Annotation';
import Text from '../src/components/Text';

const meta = {
	title: 'Footnotes/Annotation',
	component: Annotation,
	// tags: ['autodocs'],
	args: {
		index: 1,
		padIndex: true,
		leadingChar: '0',
		children: 'Annotated text',
	},
} satisfies Meta<typeof Annotation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ index, padIndex, indexMaxLength, leadingChar, children }) => (
		<Annotation
			index={index}
			padIndex={padIndex}
			leadingChar={leadingChar}
			indexMaxLength={indexMaxLength}
		>
			{children}
		</Annotation>
	),
};
