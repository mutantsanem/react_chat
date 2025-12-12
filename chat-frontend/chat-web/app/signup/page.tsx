"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signup } from "../../lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signup({ name, email, password });
      router.push('/login');
    } catch (err: any) {
      setError(err?.data?.message ?? (err?.status ? `Error ${err.status}` : "Request failed"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-md rounded-lg bg-white p-8 shadow dark:bg-[#0b0b0b]">
        <h1 className="mb-6 text-2xl font-semibold">Create an account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm">
            <span className="mb-1">Full name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="rounded-md border px-3 py-2"
            />
          </label>
          <label className="flex flex-col text-sm">
            <span className="mb-1">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="rounded-md border px-3 py-2"
            />
          </label>
          <label className="flex flex-col text-sm">
            <span className="mb-1">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="rounded-md border px-3 py-2"
            />
          </label>
          <button disabled={loading} className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white">{loading ? 'Creating...' : 'Create account'}</button>
        </form>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <p className="mt-4 text-sm">
          Already have an account? <Link href="/login" className="text-blue-600">Sign in</Link>
        </p>
        <p className="mt-4 text-sm">
          <Link href="/" className="text-zinc-600">Back</Link>
        </p>
      </main>
    </div>
  );
}
