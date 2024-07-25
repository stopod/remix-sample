import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "mui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Button",
    variant: "text",
  },
};

export const Contained: Story = {
  args: {
    label: "Button",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    label: "Button",
    variant: "outlined",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Button",
    variant: "contained",
    color: "success",
  },
};

export const Error: Story = {
  args: {
    label: "Button",
    variant: "contained",
    color: "error",
  },
};
