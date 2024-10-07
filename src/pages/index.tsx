import TitleBar from "@/components/TitleBar";
import { NextPage } from "next";
import Link from "next/link";

const Feed: NextPage = () => {
  return (
    <div className="bg-red-500">
      <TitleBar />
      <h3>Who to follow</h3>
      <div>
        <h1 className="font-mono text-base italic">
          This is a Display 1 Heading
        </h1>
        <h1 className="heading-1">This is an H1 Heading</h1>
        <h2 className="heading-2">This is an H2 Heading</h2>
        <h3 className="heading-3">This is an H3 Heading</h3>
        <h4 className="heading-4">This is an H4 Heading</h4>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <nav className="space-x-4">
          <Link href="/profile" className="text-blue-600 hover:text-blue-800">
            Profile
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Feed;
