import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./index";

const meta = {
  title: "shadcon-ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Sample: Story = {
  args: {
    children: "Button",
    className: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
  },
};
