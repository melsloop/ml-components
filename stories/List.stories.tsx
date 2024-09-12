import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import List from '../src/components/List';
import ListItem from '../src/components/List/ListItem';

const meta = {
	title: 'Semantic/List',
	component: List,
	tags: ['autodocs'],
	args: {},
	argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: function Render() {
		return (
			<List>
				<ListItem>Item 1</ListItem>
				<ListItem>Item 2</ListItem>
			</List>
		);
	},
};
