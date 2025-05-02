import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from '../src/components/RadioGroup';
import { fullWidthControls } from './helpers/commonControls';
import { Button, Icon } from '../src';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import RadioGroupItemButton from '../src/components/RadioGroup/RadioGroupItemButton';
import RadioGroupItemRadioButton from '../src/components/RadioGroup/RadioGroupItemRadioButton';

const meta = {
	title: 'Button/RadioGroup',
	component: RadioGroup,
	// tags: ['autodocs'],
	args: {
		defaultValue: '1',
		orientation: 'horizontal',
		direction: 'ltr',
		loop: false,
		type: 'radio',
		itemCount: 5,
	},
	argTypes: {
		direction: {
			options: ['ltr', 'rtl'],
			control: 'select',
		},
		orientation: {
			options: ['horizontal', 'vertical'],
			control: 'select',
		},
		type: {
			options: ['button', 'radio'],
			control: 'select',
		},
		itemCount: {
			control: 'number',
		},
		...fullWidthControls,
	},
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({
		defaultValue,
		direction,
		orientation,
		fullWidth,
		bordered,
		radius,
		shadow,
		size,
		spacing,
		// story props
		type,
		itemCount,
	}) => {
		const [, setState] = useState('');
		const onClick = (val: string) => {
			setState(val);
		};

		const item = (index: string, type: string) => {
			const ItemTag =
				type === 'radio' ? RadioGroupItemRadioButton : RadioGroupItemButton;

			return (
				<ItemTag value={index}>
					{/* <Icon>
						<SunIcon />
					</Icon> */}
					<span>Item {index}</span>
				</ItemTag>
			);
		};

		const values = Array(itemCount)
			.fill('')
			.map((c, index) => `${index + 1}`);

		return (
			<RadioGroup
				defaultValue={defaultValue}
				direction={direction}
				orientation={orientation}
				size={size}
				bordered={bordered}
				radius={radius}
				shadow={shadow}
				spacing={spacing}
				fullWidth={fullWidth}
				onSelect={onClick}
			>
				{values.map((val) => item(val, type))}
				{/* <RadioGroupItemRadioButton value="1">
					<Icon>
						<SunIcon />
					</Icon>
					<span>EN</span>
				</RadioGroupItemRadioButton>
				<RadioGroupItemButton value="2">
					<Icon>
						<MoonIcon />
					</Icon>
					<span>ע</span>
				</RadioGroupItemButton> */}
				{/* <span data-value="1">
					<Icon>
						<SunIcon />
					</Icon>
					<span>
						EN
					</span>
				</span>
				<span data-value="2">
					<Icon>
						<MoonIcon />
					</Icon>
					<span>
						ע
					</span>
				</span> */}
			</RadioGroup>
		);
	},
};
