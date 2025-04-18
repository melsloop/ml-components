import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CodeSnippet from '../src/components/CodeSnippet';
import Text from '../src/components/Text';
import { Container } from '../src';

const meta = {
	title: 'Text/CodeSnippet',
	component: CodeSnippet,
	// tags: ['autodocs'],
	args: {
		inline: false,
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
	render: (args) => {
		return (
			<CodeSnippet {...args}>
				{`export const Block: Story = {
	render: ({ children, ...args }) => {
		return <CodeSnippet {...args}>{children}</CodeSnippet>;
	}
}`}
			</CodeSnippet>
		);
	},
};

export const Inline: Story = {
	render: (args) => {
		return (
			<Container>
					<Text
						size="md"
						variant="body1"
					>
						This is a{' '}
						<CodeSnippet
							{...args}
							inline
						>
							{'<CodeSnippet inline/>'}
						</CodeSnippet>{' '}
						inside a running text.
					</Text>
				</Container>
		);
	},
};
