import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	sizeControls,
	fullWidthControls,
	disabledControls,
	seoTitleControls,
	buttonVariantControls,
	buttonModeControls,
	shadowControls,
	radiusControls,
} from './helpers/commonControls';
import Button from '../src/components/Button';
import Icon from '../src/components/Icon';
import { CubeIcon } from '@radix-ui/react-icons';

type Story = StoryObj<typeof meta>;

const meta = {
	title: 'Button/Button',
	component: Button,
	// tags: ['autodocs'],
	args: {
		children: 'Click',
		size: 'md',
		radius: 'md',
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
		...radiusControls,
		...shadowControls,
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
	render: ({ children, ...args }) => {
		return (
			<Button {...args}>
				<span>
					<Icon size={15}>
						<CubeIcon />
					</Icon>
					{children}
				</span>
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
