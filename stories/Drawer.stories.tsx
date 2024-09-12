import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from '../src/components/Drawer';
import Button from '../src/components/Button';

const meta = {
	title: 'Drawer',
	component: Drawer,
	tags: ['autodocs'],
	args: {
		// open: false,
		direction: 'right',
	},
	argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: function Render({ direction }) {
		const [open, setOpen] = useState<boolean>(false);
		return (
			<>
				<Button
					variant="contained"
					mode="primary"
					size="xs"
					onClick={() => setOpen(true)}
				>
					Open Drawer
				</Button>
				<Drawer
					open={open}
					direction={direction}
				>
					<div>
						<Button
							variant="contained"
							mode="primary"
							size="xs"
							onClick={() => setOpen(false)}
						>
							Close Drawer
						</Button>
					</div>
					Content
				</Drawer>
			</>
		);
	},
};
