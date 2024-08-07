import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Label } from "./index";

const meta = {
  title: "shadcn-ui/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};
