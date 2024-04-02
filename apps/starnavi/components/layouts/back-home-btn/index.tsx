"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/common/button";
import { EAppRouting } from "@/enums";

export const BackHomeBtn = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => router.back();

  if (pathname === EAppRouting.ROOT) return null;

  return (
    <div className="transition-all hover:underline">
      <Button onClick={handleClick} caption="Back Home" />
    </div>
  );
};
