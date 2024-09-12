import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
	sizeControls,
	fullWidthControls,
	disabledControls,
	seoTitleControls,
	buttonVariantControls,
	buttonModeControls,
} from './commonControls';
import Button from '../src/components/Button';
import Icon from '../src/components/Icon';

type Story = StoryObj<typeof meta>;

const meta = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Click',
		size: 'md',
		variant: 'contained',
		mode: 'primary',
		fullWidth: false,
		disabled: false,
		title: 'Button Title',
		ref: undefined,
	},
	argTypes: {
		children: {
			name: 'Text',
			control: 'text',
		},
		...sizeControls,
		...buttonVariantControls,
		...buttonModeControls,
		...fullWidthControls,
		...disabledControls,
		...seoTitleControls,
	},
} satisfies Meta<typeof Button>;

export default meta;

export const Default: Story = {
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const ButtonWithIcon: Story = {
	render: ({ children, size, ...args }) => {
		return (
			<Button
				size={size}
				{...args}
			>
				<Icon
					icon="CubeIcon"
					size={size}
				/>
				{children}
			</Button>
		);
	},
};

// export const Click: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Click/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
