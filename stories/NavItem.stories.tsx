import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import NavItem from '../src/components/Nav/NavItem';

const meta = {
	title: 'Menu/NavItem',
	component: NavItem,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	// tags: ['autodocs'],
	args: {
		icon: 'article',
		title: 'Nav Item 1',
		description: 'Item description',
		author: '',
	},
	argTypes: {},
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavBar: Story = {
	render: ({ icon, title, description, author, ...args }) => {
		return (
			<NavItem
				icon={icon}
				title={title}
				description={description}
				author={author}
				{...args}
			/>
		);
	},
};
