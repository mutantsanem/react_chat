import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    <div className="mt-6 flex w-full max-w-3xl justify-center sm:justify-start">
          <div className="flex gap-3">
            <Link
              href="/login"
              className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex h-12 items-center justify-center rounded-full border border-blue-600 px-5 text-blue-600 transition-colors hover:bg-blue-50"
            >
              Sign Up
            </Link>
          </div>
        </div>
    
      </main>
    </div>
  );
}
