import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <div className="bg-slate-400 h-10 w-64 mt-3 ml-3">
        <a href="/shadcn/sample">move shadcn sample page</a>
      </div>

      <div className="bg-slate-400 h-10 w-64 mt-3 ml-3">
        <a href="/mui/sample">move mui sample page</a>
      </div>
    </>
  );
}
