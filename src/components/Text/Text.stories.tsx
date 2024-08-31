import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
	tags: ['autodocs'],
  args: {
    children: 'Lorem Ipsum',
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'h1',
	},
	render: function Render({ variant }) {
		return <Text variant={variant}>Lorem Ipsum</Text>;
	},
};
