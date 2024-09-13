import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from '../src/components/Table/Table';

const meta = {
	title: 'Text/Table',
	component: Table,
	tags: ['autodocs'],
	args: {},
	argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render() {
		return (
			<Table>
				<tr>
					<td>MSB</td>
					<th>AAA</th>
					<th>X</th>
					<th>CCC</th>
					<td>LSB</td>
				</tr>
				<tr>
					<td></td>
					<td>Data</td>
					<td>Index</td>
					<td>Opcode</td>
					<td></td>
				</tr>
			</Table>
		);
	},
};
