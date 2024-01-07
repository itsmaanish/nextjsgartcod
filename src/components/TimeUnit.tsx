import { cn } from "@/utils/tailwind-util";
import { NumberRotation } from "./NumberRotation";

export const TimeUnit = ({
  label,
  value,
  currentIcon,
}: {
  label: string;
  value: number;
  currentIcon: string;
}) => (
  <div className="flex flex-col">
    <div className="text-white text-3xl font-semibold">
      <NumberRotation number={value} />
    </div>
    <div
      className={cn("text-[8px] font-medium", {
        "text-yellow-300": currentIcon === "chrome",
        "text-red-300": currentIcon === "mobile",
        "text-neutral-300": currentIcon === "desktop",
      })}
    >
      {label}
    </div>
  </div>
);