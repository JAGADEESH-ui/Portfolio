import Font_32px, {
	Font_64px,
	Font_84px,
	Font_94px,
} from "@/modules/common/labels";
import SectionHeadingComponent from "@/modules/common/section-heading";
import Link from "next/link";

export default function ContactComponent() {
	return (
		<div
			id="contact"
			className="flex flex-col gap-5 md:gap-20 justify-between py-10"
		>
			<SectionHeadingComponent label={"Contact"} />
			<div className="flex flex-col items-start gap-2">
				<Link href={"mailto:jagadeeshgp2404@gmail.com"}>
					{" "}
					<Font_84px
						label={"jagadeeshgp2404@gmail.com"}
						family={"font-bricolage_grotesque"}
						align={"text-center"}
						weight={"font-semibold"}
						leading={"leading-none"}
						color={"text-blue-600"}
					/>
				</Link>
				<Link href={"tel:+918139984460"}>
					<Font_64px
						label={"(+91) 81399 84460"}
						family={"font-popins"}
						align={"text-center"}
						weight={"font-extralight"}
						leading={"leading-none"}
						color={"text-white"}
					/>
				</Link>
			</div>
		</div>
	);
}
