import Button from "@/components/Button";
import { NextPage } from "next";

const Components: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-semibold">Components Page</h1>
      <Button text="Button" variant="solid" size="large" />
    </div>
  );
};

export default Components;
