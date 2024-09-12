import type { Meta, StoryObj } from '@storybook/react';
import LoadingIndicator from '../src/components/LoadingIndicator';

const meta = {
	title: 'Loading Indicator',
	component: LoadingIndicator,
	tags: ['autodocs'],
	args: {
		label: 'Loading...',
		delay: 0,
	},
} satisfies Meta<typeof LoadingIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
