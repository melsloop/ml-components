import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CodeSnippet from '../src/components/CodeSnippet';
import Text from '../src/components/Text';
import { Container } from '../src';

const meta = {
	title: 'CodeSnippet',
	component: CodeSnippet,
	tags: ['autodocs'],
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
	render: function Render({ children, ...args }) {
		return <CodeSnippet {...args}>{children}</CodeSnippet>;
	},
};

export const Block: Story = {
	render: function Render({ children, ...args }) {
		return (
			<CodeSnippet>
				{`export const Block: Story = {
	render: function Render({ children, ...args }) {
		return <CodeSnippet {...args}>{children}</CodeSnippet>;
	}
}`}
			</CodeSnippet>
		);
	},
};

export const Inline: Story = {
	render: function Render(...args) {
		return (
			<>
				<Container
					alignContentLeft
					alignItemsCenter
				>
					<Text
						size="md"
						variant="body1"
					>
						This is a{' '}
						<CodeSnippet
							inline
							{...args}
						>
							{'<CodeSnippet inline/>'}
						</CodeSnippet>{' '}
						inside a running text.
					</Text>
				</Container>
				<Container
					alignItemsCenter
					alignContentLeft
				>
					<Text
						size="md"
						variant="body1"
					>
						<CodeSnippet
							inline
							{...args}
						>
							{'<CodeSnippet inline/>'}
						</CodeSnippet>{' '}
						at the start of a line.
					</Text>
				</Container>
				<Container
					alignContentLeft
					alignItemsCenter
				>
					<Text
						size="md"
						variant="body1"
					>
						At the end of a line:{' '}
						<CodeSnippet
							inline
							{...args}
						>
							{'<CodeSnippet inline/>'}
						</CodeSnippet>
						.
					</Text>
				</Container>
			</>
		);
	},
};
