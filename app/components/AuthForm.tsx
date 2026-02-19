"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  type: "login" | "signup";
}

export default function AuthForm({ type }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`/api/auth/${type}`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/dashboard");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-96 space-y-4 bg-white border p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {type === "signup" && (
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : type === "login" ? "Login" : "Create Account"}
        </button>

        <p className="text-center text-sm text-gray-600">
          {type === "login" ? (
            <>
              Don't have an account?{" "}
              <a href="/signup" className="text-black font-medium hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-black font-medium hover:underline">
                Login
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
