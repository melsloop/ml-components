import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withForm } from './helpers/formUtils';
import TextField from '../src/components/TextField/TextField';
import { DotsHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import TextFieldSlot from '../src/components/TextField/TextFieldSlot';
import { excludeControls } from './helpers/controlUtils';
import {
	autoCompleteControls,
	customValidationMessageControls,
	disabledControls,
	fullApiControls,
	fullWidthControls,
	labelControls,
	maxLengthControls,
	minLengthControls,
	placeholderControls,
	radiusControls,
	readOnlyControls,
	requiredControls,
	sizeControls,
	messageBadInputControls,
	messageCustomErrorControls,
	messageRangeOverflowControls,
	messageRangeUnderflowControls,
	messageTooLongControls,
	messageTooShortControls,
	messageTypeMismatchControls,
	messageValueMissingControls,
} from './helpers/commonControls';
import CopyButton, { useCopyToClipboard } from '../src/components/CopyButton';

type TextFieldStoryArgs = React.ComponentProps<typeof TextField> & {
	prefixSlot?: boolean;
	suffixSlot?: boolean;
	customValidationMessage?: boolean;
	fullApi?: boolean;
};

const meta = {
	title: 'Input/TextField',
	component: TextField,
	args: {
		type: 'text',
		label: 'Label',
		placeholder: 'Placeholder',
		required: false,
		disabled: false,
		readOnly: false,
		size: 'md',
		radius: 'sm',
		fullWidth: false,
		minLength: 0,
		maxLength: undefined,
		autoComplete: undefined,
		prefixSlot: false,
		suffixSlot: false,
		customValidationMessage: false,
		fullApi: false,
	},
	argTypes: {
		...fullWidthControls,
		...sizeControls,
		...radiusControls,
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
		...messageBadInputControls,
		...messageRangeOverflowControls,
		...messageRangeUnderflowControls,
		...messageCustomErrorControls,
		...fullApiControls,
		...excludeControls([
			'name',
			'validity',
			'className',
			'customInputRef',
			'customInputClassname',
			'onInput',
			'onBlur',
			'onFocus',
		]),
		type: {
			name: 'Type',
			control: { type: 'select' },
		},
		value: {
			name: 'Value',
			control: { type: 'text' },
		},
		prefixSlot: {
			name: 'Prefix Slot',
			control: { type: 'boolean' },
		},
		suffixSlot: {
			name: 'Suffix Slot',
			control: { type: 'boolean' },
		},
	},
} satisfies Meta<TextFieldStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ prefixSlot, suffixSlot, ...props }: TextFieldStoryArgs) =>
		withForm(
			<TextField {...props}>
				{prefixSlot && (
					<TextFieldSlot slot="prefix">
						<MagnifyingGlassIcon
							height="16"
							width="16"
						/>
					</TextFieldSlot>
				)}
				{suffixSlot && (
					<TextFieldSlot slot="suffix">
						<DotsHorizontalIcon
							height="16"
							width="16"
						/>
					</TextFieldSlot>
				)}
			</TextField>,
		),
};

const TextFieldWithCopyButton = ({ ...args }: TextFieldStoryArgs) => {
	const { inputRef, setTextSelection } = useCopyToClipboard();

	return (
		<TextField
			{...args}
			customInputRef={inputRef}
			onFocus={setTextSelection}
		>
			<TextFieldSlot slot="suffix">
				<CopyButton inputRef={inputRef} />
			</TextFieldSlot>
		</TextField>
	);
};

export const CopyToClipboard: Story = {
	render: ({ ...args }) => withForm(<TextFieldWithCopyButton {...args} />),
};
