import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import MenuBar from "./MenuBar";

const mockData = [
  {
    id: "section1",
    type: "section",
    data: {
      title: "Section 1",
      items: [
        {
          id: "article1",
          type: "article",
          data: {
            title: "Article 1",
            author: "Author Name 1",
            url: "#/a1",
            icon: "article",
          },
        },
        {
          id: "article2",
          type: "article",
          data: {
            title: "Article 2",
            author: "Author Name 2",
            url: "#",
            icon: "link",
          },
        },
      ],
    },
  },
  {
    id: "section2",
    type: "section",
    data: {
      title: "Section 2",
      items: [
        {
          id: "article3",
          type: "article",
          data: {
            title: "Article 3",
            author: "Author Name 3",
            url: "#/a2",
            icon: "article",
          },
        },
        {
          id: "article4",
          type: "article",
          data: {
            title: "Article 4",
            author: "Author Name 4",
            url: "#",
            icon: "link",
          },
        },
      ],
    },
  },
];

const meta = {
  title: "MenuBar",
  component: MenuBar,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockData,
    direction: "rtl",
    currentPath: '#/a2',
  },
  render: function Render({ data, direction, currentPath }) {
    return <MenuBar data={data} direction={direction} currentPath={currentPath} />;
  },
};
