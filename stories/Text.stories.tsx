import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';
import { textVariantControls } from './helpers/commonControls';

const meta = {
	title: 'Text/Text',
	component: Text,
	// tags: ['autodocs'],
	args: {
		children: 'Lorem Ipsum',
		variant: 'title',
		textAlign: 'left',
	},
	argTypes: {
		...textVariantControls,
	},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ variant, fullWidth, textAlign }) => {
		return (
			<Text
				variant={variant}
				fullWidth={fullWidth}
				textAlign={textAlign}
			>
				Lorem Ipsum
			</Text>
		);
	},
};
