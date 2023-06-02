import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
  path: string;
  className?: string;
  iconColor?: string;
}

export default function ({
  text,
  icon,
  path,
  className,
  iconColor,
}: SidebarItemProps) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (router.asPath === path) setActive(true);
    else setActive(false);
  }, [router]);

  return (
    <Link href={path}>
      <div
        className={`${
          active ? "bg-sky-500" : "hover:bg-slate-200 bg-gray-100"
        } duration-100 py-1 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md ${className}`}
      >
        {React.cloneElement(icon, {
          className: "w-4 h-4",
          style: {
            color: active ? "white" : iconColor ? iconColor : "#7dd3fc",
          },
        })}
        <p
          className={`${active ? "text-white" : "text-sky-900"} truncate w-4/6`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
