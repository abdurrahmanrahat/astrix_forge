"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type TActiveLinkProps = {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
};

const ActiveLink = ({
  href,
  exact = false,
  children,
  className,
}: TActiveLinkProps) => {
  const path = usePathname();
  const isActive = exact ? path == href : path.startsWith(href);

  return (
    <div>
      <Link
        href={href}
        className={`text-base 2xl:text-lg font-medium transition-all duration-300 hover:text-primary dark:hover:text-primary ${isActive ? "text-primary dark:text-primary" : ""} ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default ActiveLink;
