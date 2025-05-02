import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withForm } from './helpers/formUtils';
import PasswordField from '../src/components/PasswordField';
import {
	autoCompleteControls,
	borderedControls,
	customValidationMessageControls,
	disabledControls,
	fullWidthControls,
	labelControls,
	maxLengthControls,
	messageTooLongControls,
	messageTooShortControls,
	messageTypeMismatchControls,
	messageValueMissingControls,
	minLengthControls,
	placeholderControls,
	radiusControls,
	readOnlyControls,
	requiredControls,
	sizeControls,
} from './helpers/commonControls';

type PasswordFieldStoryArgs = React.ComponentProps<typeof PasswordField> & {
	customValidationMessage?: boolean;
};

const meta = {
	title: 'Input/PasswordField',
	component: PasswordField,
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		required: false,
		disabled: false,
		readOnly: false,
		size: 'md',
		radius: 'sm',
		fullWidth: false,
		minLength: 0,
		autoComplete: undefined,
		customValidationMessage: false,
	},
	argTypes: {
		...fullWidthControls,
		...sizeControls,
		...radiusControls,
		...borderedControls,
		...labelControls,
		...placeholderControls,
		...readOnlyControls,
		...disabledControls,
		...requiredControls,
		...minLengthControls,
		...maxLengthControls,
		...autoCompleteControls,
		...customValidationMessageControls,
		...messageValueMissingControls,
		...messageTypeMismatchControls,
		...messageTooShortControls,
		...messageTooLongControls,
	},
} satisfies Meta<PasswordFieldStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ ...props }: PasswordFieldStoryArgs) =>
		withForm(<PasswordField {...props} />),
};
