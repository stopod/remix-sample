import type { Meta, StoryObj } from "@storybook/react";
import {
  TableElement,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./index";

const meta = {
  title: "shadcn-ui/Table",
  component: TableElement,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TableElement>;

export default meta;
type Story = StoryObj<typeof meta>;

const posts = [
  { id: 1, userId: 1, title: "title1", body: "body1" },
  { id: 1, userId: 2, title: "title2", body: "body2" },
  { id: 1, userId: 3, title: "title3", body: "body3" },
  { id: 2, userId: 4, title: "title4", body: "body4" },
  { id: 2, userId: 5, title: "title5", body: "body5" },
  { id: 3, userId: 6, title: "title6", body: "body6" },
];

export const Default: Story = {
  render: () => (
    <TableElement>
      <TableHeader>
        <TableRow>
          <TableHead>userId</TableHead>
          <TableHead>id</TableHead>
          <TableHead>title</TableHead>
          <TableHead>body</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.userId}</TableCell>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableElement>
  ),
};

export const Sample: Story = {
  render: () => (
    <TableElement>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>Footer</TableFooter>
    </TableElement>
  ),
};
