import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <div className="bg-slate-400 h-10 w-64 mt-3 ml-3 rounded flex items-center justify-center font-bold hover:bg-slate-200 active:bg-slate-400">
        <Link to={"/shadcn/sample"}>move shadcn sample page</Link>
      </div>
    </>
  );
}
