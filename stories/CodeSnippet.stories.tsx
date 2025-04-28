import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CodeSnippet from '../src/components/CodeSnippet';
import Text from '../src/components/Text';

const meta = {
	title: 'Text/CodeSnippet',
	component: CodeSnippet,
	// tags: ['autodocs'],
	args: {
		inline: false,
		spacing: 'md',
		children: 'snippet content',
	},
	argTypes: {
		inline: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof CodeSnippet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ spacing }) => {
		return (
			<CodeSnippet spacing={spacing}>
				{`export const Block: Story = {
	render: ({ children }) => {
		return <CodeSnippet>
			{children}
		</CodeSnippet>;
	}
}`}
			</CodeSnippet>
		);
	},
};

export const Inline: Story = {
	render: ({ spacing }) => (
		<Text variant="body1">
			This is a{' '}
			<CodeSnippet
				inline
				spacing={spacing}
			>
				{'<CodeSnippet inline/>'}
			</CodeSnippet>{' '}
			inside a running text.
		</Text>
	),
};
