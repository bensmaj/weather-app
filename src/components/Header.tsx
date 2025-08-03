"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="w-full flex items-center justify-center p-4">
        <Link href="/" className="text-xl font-bold">
          Weather
        </Link>
      </div>
    </header>
  );
}
