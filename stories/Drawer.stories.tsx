import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from '../src/components/Drawer';
import Button from '../src/components/Button';

const meta = {
	title: 'Container/Drawer',
	component: Drawer,
	// tags: ['autodocs'],
	args: {
		open: false,
		direction: 'right',
	},
	argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ open, direction, ...args }) => {
		const [opened, setOpened] = useState<boolean>(false);
		return (
			<>
				<Button
					variant="contained"
					mode="primary"
					size="xs"
					onClick={() => setOpened(true)}
				>
					Open Drawer
				</Button>
				<Drawer
					open={open || opened}
					direction={direction}
					{...args}
				>
					<div>
						<Button
							variant="contained"
							mode="primary"
							size="xs"
							onClick={() => setOpened(false)}
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
