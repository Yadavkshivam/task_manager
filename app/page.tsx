import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="text-center space-y-6 p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Task Manager 🚀
          </h1>
          <p className="text-gray-600 text-lg">
            Organize your tasks efficiently and boost your productivity
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
          >
            Login
          </a>
          <a
            href="/signup"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 font-semibold"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}


