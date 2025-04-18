import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../src/components/TextField';
import { withForm } from './helpers/formUtils';
import {
	fullWidthControls,
	iconControls,
	sizeControls,
} from './helpers/commonControls';

const meta = {
	title: 'Input/TextField',
	component: TextField,
	// tags: ['autodocs'],
	args: {
		size: 'md',
		label: 'Label',
		placeholder: 'Placeholder',
		required: false,
		fullWidth: false,
		icon: undefined,
	},
	argTypes: {
		...iconControls,
		...fullWidthControls,
		...sizeControls,
	},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ ...args }) => withForm(<TextField {...args} />),
};
