import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ children, href, onClick }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        {children}
      </Link>
    );
  }
  return (
    <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={onClick}>
      {children}
    </button>
  );
}
