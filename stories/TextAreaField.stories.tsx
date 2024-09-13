import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextAreaField from '../src/components/TextAreaField';
import { withForm } from './helpers/formUtils';
import {
	fullWidthControls,
	iconControls,
	sizeControls,
} from './helpers/commonControls';

const meta = {
	title: 'Input/TextAreaField',
	component: TextAreaField,
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
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ ...args }) => withForm(<TextAreaField {...args} />),
};
