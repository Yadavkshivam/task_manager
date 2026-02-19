import Image from "next/image";

export default function Home() {
  return (

    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Task Manager 🚀
        </h1>
        <p className="text-gray-500">
          Organize your tasks efficiently
        </p>

        <div className="space-x-4">
          <a
            href="/login"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Login
          </a>
          <a
            href="/signup"
            className="border px-4 py-2 rounded"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}


