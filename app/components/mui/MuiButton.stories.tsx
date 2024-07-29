import type { Meta, StoryObj } from "@storybook/react";
import { MuiButton } from "./MuiButton";

const meta = {
  title: "mui/MuiButton",
  component: MuiButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    variant: "outlined",
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    color: "success",
  },
};

export const Error: Story = {
  args: {
    children: "Button",
    color: "error",
  },
};
