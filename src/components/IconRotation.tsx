import Image from "next/image";
import { assets } from "@/utils/asset-util";
import { type Icon, icons } from "@/utils/icon-util";
import { cn } from "@/utils/tailwind-util";

export const IconRotation = ({
  currentIcon,
}: {
  currentIcon: Icon;
}) => {
  return (
    <div className="mx-2 -mt-2 align-middle inline-flex relative h-[80px] w-[80px]">
      {icons.map((name, index) => (
        <Image
          key={name}
          src={assets[name]}
          className={cn(
            "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 ",
            currentIcon === name
              ? "opacity-100 transform-none"
              : index > icons.indexOf(currentIcon as Icon)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
          alt="Icon logo"
          width="80"
          height="80"
        />
      ))}
    </div>
  );
};