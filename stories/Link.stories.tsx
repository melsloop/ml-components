import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Link from '../src/components/Link';

const meta = {
	title: 'Semantic/Link',
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

export const Primary: Story = {
	render: function Render(args) {
		return <Link {...args}>Link</Link>;
	},
};
