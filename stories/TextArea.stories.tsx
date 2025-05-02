import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '../src/components/TextArea';
import { withForm } from './helpers/formUtils';
import { fullWidthControls, sizeControls } from './helpers/commonControls';

const meta = {
	title: 'Input/TextArea',
	component: TextArea,
	args: {
		size: 'md',
		label: 'Label',
		placeholder: 'Placeholder',
		required: false,
		fullWidth: false,
	},
	argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => withForm(<TextArea {...args} />),
};
