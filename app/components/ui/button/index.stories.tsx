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

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Red: Story = {
  args: {
    children: "Button",
    className: "bg-red-500 hover:bg-red-600",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};
