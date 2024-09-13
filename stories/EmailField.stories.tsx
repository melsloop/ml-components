import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmailField from '../src/components/EmailField';
import { withForm } from './helpers/formUtils';
import {
	fullWidthControls,
	iconControls,
	sizeControls,
} from './helpers/commonControls';

const meta = {
	title: 'Input/EmailField',
	component: EmailField,
	tags: ['autodocs'],
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
} satisfies Meta<typeof EmailField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ ...args }) => withForm(<EmailField {...args} />),
};
