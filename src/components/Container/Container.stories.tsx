import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Container from "./Container";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Container",
  component: Container,
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// HelloWorld.args = {
//   label: "Save",
// };

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click me!",
// };