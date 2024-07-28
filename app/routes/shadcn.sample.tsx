import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { TableElement, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";

type SideberAccordionItemProps = {
  value: string;
  title: string;
  contents: string[];
};
const SideberAccordionItem = ({ value, title, contents }: SideberAccordionItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      {contents.map((c) => (
        <AccordionContent key={c}>{c}</AccordionContent>
      ))}
    </AccordionItem>
  );
};

type SearchFormProps = {
  className?: string;
};
const SearchForm = ({ className }: SearchFormProps) => {
  return (
    <div className={`flex ${className}`}>
      <Input className="w-40 ml-2"></Input>
      <Button className="ml-1 hover:bg-blue-500 bg-blue-300 active:bg-blue-400">検索</Button>
    </div>
  );
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
  const data: Post[] = await response.json();
  return json({ posts: data });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  const userIds = [...new Set(posts.map((post) => post.userId))];

  const [curPosts, setCurPosts] = React.useState<Post[]>(posts);

  const FormSchema = z.object({
    userId: z.string({
      required_error: "Please select userId to display.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (data.userId === "all") {
      setCurPosts(posts);
    } else {
      const userId = Number(data.userId);
      setCurPosts(posts.filter((post) => post.userId === userId));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* サイド */}
      <div className="bg-red-100 w-72">
        <h2 className="text-2xl">Sample Menu</h2>
        <SearchForm className="mt-3 mb-3 mr-3" />
        <Accordion type="single" collapsible>
          <SideberAccordionItem value="item-1" title="title1" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-2" title="title2" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-3" title="title3" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-4" title="title4" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-5" title="title5" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-6" title="title6" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-7" title="title7" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-8" title="title8" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-9" title="title9" contents={["sample1", "sample2"]} />
          <SideberAccordionItem value="item-10" title="title10" contents={["sample1", "sample2"]} />
        </Accordion>
      </div>
      {/* メイン */}
      <div className="flex flex-col flex-grow min-h-screen w-5/6">
        {/* ヘッダ */}
        <div className="fixed w-full z-10 h-16 bg-green-100">
          <h1 className="text-3xl">Sample Title</h1>
        </div>
        {/* コンテンツ */}
        <div className="flex-grow mt-16 bg-yellow-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="ml-3 mt-1 mb-3 flex">
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem className="w-60">
                    <FormLabel>UserID</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="all" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"all"}>all</SelectItem>
                        {userIds.map((userId) => (
                          <SelectItem value={userId.toString()} key={userId}>
                            {userId}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="ml-3 mt-8 hover:bg-blue-500 bg-blue-300 active:bg-blue-400">
                抽出
              </Button>
            </form>
          </Form>

          <TableElement>
            <TableHeader className="bg-yellow-200">
              <TableRow>
                <TableHead>userId</TableHead>
                <TableHead>id</TableHead>
                <TableHead>title</TableHead>
                <TableHead>body</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {curPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.userId}</TableCell>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell onClick={() => window.alert(post.body)} className="hover:cursor-pointer">
                    {post.body}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableElement>
        </div>
      </div>
    </div>
  );
}
