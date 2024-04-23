import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Term from "./Term";

const meta = {
  title: "Term",
  component: Term,
  parameters: {
    layout: "fullscreen",
  },
	tags: ['autodocs'],
  args: {
    children: 'Some text'
  }
} satisfies Meta<typeof Term>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
	},
	render: function Render() {
		return (
			<Term>term</Term>
		);
	},
};