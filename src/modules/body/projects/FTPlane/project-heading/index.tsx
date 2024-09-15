import { Font_28px, Font_94px } from "@/modules/common/labels";
import Link from "next/link";

export default function ProjectHeadingComponent({ label, projectSrc }: any) {
  return (
    <div className="flex justify-between ">
      <Font_94px
        label={label}
        family={"font-bricolage_grotesque"}
        align={"text-center"}
        weight={"font-semibold"}
        leading={"leading-none"}
      />
      <Link className="group flex flex-col cursor-pointer" href={projectSrc}>
        <Font_28px
          label={"VISIT WEBSITE"}
          family={"font-bricolage_grotesque"}
          align={"text-center"}
          weight={"font-semibold"}
          leading={"leading-none"}
          color={"text-blue-600"}
        />
        <span className="overflow-hidden w-0 group-hover:w-full transition-all duration-300 ease-out bg-blue-600 text-white group-hover:p-[2px]"></span>
      </Link>
    </div>
  );
}
