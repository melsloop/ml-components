import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Container from '../src/components/Container';
import { Button } from '../src';
import { radiusControls, shadowControls } from './helpers/commonControls';

const meta = {
	title: 'Container/Container',
	component: Container,
	// tags: ['autodocs'],
	args: {
		sticky: false,
		bordered: false,
		shadow: undefined,
		radius: undefined,
		gap: undefined,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		spacing: 'none',
		border: 'xs',
		minHeight: '0px',
	},
	argTypes: {
		sticky: {
			control: 'boolean',
		},
		stickyPosition: {
			options: ['none', 'top', 'bottom'],
			control: 'select',
		},
		gap: {
			options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
			control: 'select',
		},
		justifyContent: {
			options: [
				'center',
				'start',
				'end',
				'flex-start',
				'flex-end',
				'left',
				'right',
			],
			control: 'select',
		},
		alignItems: {
			options: [
				'normal',
				'stretch',
				'center',
				'start',
				'end',
				'flex-start',
				'flex-end',
				'self-start',
				'self-end',
				'anchor-center',
				'baseline',
				'first-baseline',
				'last-baseline',
				'safe-center',
				'unsafe-center',
			],
			control: 'select',
		},
		bordered: {
			control: 'boolean',
		},
		backgroundColor: {
			control: 'color',
		},
		borderColor: {
			control: 'color',
		},
		...shadowControls,
		...radiusControls,
	},
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({
		sticky,
		stickyPosition,
		flexDirection,
		justifyContent,
		alignItems,
		spacing,
		shadow,
		radius,
		border,
		gap,
		bordered,
		minHeight,
		backgroundColor,
		borderColor,
	}) => {
		return (
			<Container
				radius={radius}
				spacing={spacing}
				shadow={shadow}
				gap={gap}
				border={border}
				bordered={bordered}
				sticky={sticky}
				stickyPosition={stickyPosition}
				flexDirection={flexDirection}
				justifyContent={justifyContent}
				alignItems={alignItems}
				minHeight={minHeight}
				backgroundColor={backgroundColor}
				borderColor={borderColor}
			>
				<Button
					variant="contained"
					mode="primary"
					size="xs"
				>
					Button1
				</Button>
				<Button
					variant="contained"
					mode="secondary"
					size="xs"
				>
					Button2
				</Button>
			</Container>
		);
	},
};
