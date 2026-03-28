"use client";

import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./Sidebar.helpers";
import { adminSidebarItems, userSidebarItems } from "./sidebar.utils";

const Sidebar = ({ role }: { role: "user" | "admin" }) => {
  return (
    <div className="h-screen border-r border-muted text-foreground">
      <div className="py-10 mx-4">
        {/* logo section */}
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/images/shared/logo.png"
              alt="astrix_forge"
              width={160}
              height={60}
              className="h-10 md:h-11 xl:h-16 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Nav items section */}
        <div className="hidden md:flex flex-col mt-8">
          {role === "user" &&
            userSidebarItems.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}

          {role === "admin" &&
            adminSidebarItems.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
