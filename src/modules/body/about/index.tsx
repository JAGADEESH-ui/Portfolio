import Font_32px, { Font_94px } from "@/modules/common/labels";
import SectionHeadingComponent from "@/modules/common/section-heading";

export default function AboutComponent() {
	return (
		<div className="flex flex-col gap-10 md:gap-20">
			<SectionHeadingComponent label={"about"} />
			<Font_94px
				label={
					"Hi! My name is Jagadeesh, I'm a Software developer and I'm currently looking for a cool agency to collaborate with!"
				}
				family={"font-bricolage_grotesque"}
				align={"text-center"}
				weight={"font-extrabold"}
				leading={"leading-none"}
			/>
		</div>
	);
}
