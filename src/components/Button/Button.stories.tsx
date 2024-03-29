import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: 'Click',
    onClick: () => {console.log('clicked')}
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Click: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Click/i,
    });
    await userEvent.click(loginButton);
  },
};
