import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from '../src/components/Table/Table';
import { Text } from '../src';
import {
	fullWidthControls,
	radiusControls,
	shadowControls,
	sizeControls,
} from './helpers/commonControls';

const meta = {
	title: 'Text/Table',
	component: Table,
	// tags: ['autodocs'],
	args: {
		textAlign: 'center',
		verticalAlign: 'center',
		fullWidth: false,
		radius: 'sm',
		bordered: true,
		hidegGridLines: false,
	},
	argTypes: {
		verticalSpacing: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: 'select',
		},
		horizontalSpacing: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: 'select',
		},
		...sizeControls,
		...shadowControls,
		...radiusControls,
		...fullWidthControls,
	},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({
		fullWidth,
		textAlign,
		verticalAlign,
		verticalSpacing,
		horizontalSpacing,
		radius,
		shadow,
		size,
		bordered,
		hidegGridLines,
	}) => (
		<Table
			textAlign={textAlign}
			fullWidth={fullWidth}
			verticalAlign={verticalAlign}
			verticalSpacing={verticalSpacing}
			horizontalSpacing={horizontalSpacing}
			radius={radius}
			shadow={shadow}
			size={size}
			bordered={bordered}
			hidegGridLines={hidegGridLines}
		>
			<tr>
				<td>
					<Text variant="subtitle5">AAA</Text>
				</td>
				<td>
					<Text variant="subtitle5">X</Text>
				</td>
				<td>
					<Text variant="subtitle5">CCC</Text>
				</td>
			</tr>
			{Array(20)
				.fill('')
				.map((_, index) => {
					return (
						<tr key={index}>
							<td>
								<Text variant="body2">
									Data Data Data Data Data Data Data Data Data Data {index}
								</Text>
							</td>
							<td>
								<Text variant="body2">Index {index}</Text>
							</td>
							<td>
								<Text variant="body2">Opcode {index}</Text>
							</td>
						</tr>
					);
				})}
		</Table>
	),
};
