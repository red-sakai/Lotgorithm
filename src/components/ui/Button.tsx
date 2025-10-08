import Link from "next/link";
import React from "react";
import { FaSpinner } from "react-icons/fa";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode | string;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

const sizeClasses = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  icon,
  size = "md",
  loading = false,
}: ButtonProps) {
  const content = (
    <span className="flex items-center justify-center gap-2">
      {loading ? <FaSpinner className="animate-spin" /> : icon && typeof icon === "string" ? <span className="material-icons">{icon}</span> : icon}
      {children}
    </span>
  );
  const className = `inline-flex items-center rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition ${sizeClasses[size]} disabled:opacity-60 disabled:cursor-not-allowed`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick} disabled={loading}>
      {content}
    </button>
  );
}
