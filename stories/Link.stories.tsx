import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Link from '../src/components/Link';

const meta = {
	title: 'Text/Link',
	component: Link,
	tags: ['autodocs'],
	args: {
		href: '#',
		children: 'Link',
	},
	argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render(args) {
		return <Link {...args}>Link</Link>;
	},
};
