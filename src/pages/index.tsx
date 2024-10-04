import TitleBar from "@/components/TitleBar";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <TitleBar />
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <nav className="space-x-4">
          <Link href="/profile" className="text-blue-600 hover:text-blue-800">
            Profile
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
