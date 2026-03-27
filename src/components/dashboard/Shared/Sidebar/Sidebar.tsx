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
          <div className="w-[110px] md:w-[130px] xl:w-[140px] h-auto">
            <Link href="/">
              <Image
                src="/images/shared/logo.png"
                alt="astrix_forge"
                width={140}
                height={60}
                className="w-full h-auto"
                priority
              />
            </Link>
          </div>
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
