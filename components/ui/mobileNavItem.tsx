"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { SheetClose } from "./sheet";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MobileNavItem = ({
  link,
}: {
  link: { route: string; label: string; imgUrl: string };
}) => {
  const pathname = usePathname();

  const isActive = pathname === link.route;
  return (
    <SheetClose asChild key={link.route}>
      <Link
        href={link.route}
        key={link.label}
        className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
          "bg-blue-1": isActive,
        })}
      >
        <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
        <p className="font-semibold">{link.label}</p>
      </Link>
    </SheetClose>
  );
};

export default MobileNavItem;
