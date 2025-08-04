"use client";

import { Umbrella } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="w-full flex items-center justify-center p-4">
        <Link href="/" className="text-xl font-bold flex gap-3">
          <Umbrella />
          Weatherly
        </Link>
      </div>
    </header>
  );
}
