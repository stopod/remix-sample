import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen flex">
      <div className="bg-red-200 w-64">
        <h2 className="text-2xl">Sample Menu</h2>
        <ul className="mt-3">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className="flex flex-col flex-grow min-h-screen">
        <div className="fixed w-full z-10 h-16 bg-green-200">
          <h1 className="text-3xl">Sample Title</h1>
        </div>
        <div className="flex-grow mt-16 bg-yellow-200">
          <Label className="mt-5 ml-3">Sample Form</Label>
          <Input className="w-64 mt-3 ml-3"></Input>
          <Button className="mt-3 ml-3 hover:bg-blue-500 bg-blue-300 active:bg-blue-400">決定</Button>
        </div>
      </div>
    </div>
  );
}
