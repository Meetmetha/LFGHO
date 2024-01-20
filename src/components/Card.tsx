import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
  heading: string;
  subtext: string;
  icon: React.ReactElement<LucideIcon>;
};

const Card = ({ className, heading, subtext, icon }: Props) => {
  return (
    <div
      className={cn("w-full flex flex-col gap-4 rounded-3xl p-6", className)}
    >
      {icon}
      <div className="flex flex-col gap-1">
        <p className="text-[48px] text-[#232323] font-bold">{heading}</p>
        <p className="text-[#414141]">{subtext}</p>
      </div>
    </div>
  );
};

export default Card;
