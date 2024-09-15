"use client";
import Font_32px, { Font_140px } from "@/modules/common/labels";
import SectionHeadingComponent from "@/modules/common/section-heading";
import Link from "next/link";

export default function MyprojectComponent() {
	return (
		<div id="work" className="flex flex-col gap-10 md:gap-20 justify-between">
			<SectionHeadingComponent label={"my projects"} />

			<div className="flex flex-col">
				<Link href={"/"}>
					<Font_140px
						label={"Eazybook"}
						weight={"font-semibold"}
						family={"font-bricolage_grotesque"}
					/>
				</Link>

				<Link href={"/"}>
					<Font_140px
						label={"Bhima Website"}
						weight={"font-semibold"}
						family={"font-bricolage_grotesque"}
					/>
				</Link>

				<Link href={"/FTPlane"}>
					<Font_140px
						label={"FT Plane"}
						weight={"font-semibold"}
						family={"font-bricolage_grotesque"}
					/>
				</Link>

				<Link href={"/Travalingo"}>
					<Font_140px
						label={"Travalingo"}
						weight={"font-semibold"}
						family={"font-bricolage_grotesque"}
					/>
				</Link>
			</div>
		</div>
	);
}
