import type { Meta, StoryObj } from "@storybook/react";
import LoadingIndicator from "./LoadingIndicator";

const meta = {
  title: "Loading Indicator",
  component: LoadingIndicator,
  parameters: {
    layout: "fullscreen",
  },
	tags: ['autodocs'],
  args: {
    label: 'Loading...',
    delay: 0
  }
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

