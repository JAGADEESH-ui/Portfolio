import Link from "next/link";
import { Font_64px } from "../common/labels";
import Image from "next/image";

export default function FooterComponent({ prevSrc, nextSrc }: any) {
	return (
		<div className="flex justify-between">
			<Link
				className="flex cursor-pointer items-center justify-end group hover:justify-between transition-all duration-300"
				href={prevSrc}
			>
				<Image
					src="/images/diagonal-arrow-left-up.svg"
					alt="Diagonal Arrow Right Down"
					className="md:w-20 w-6 md:h-20 h-6 md:mr-2 mr-0 transform group-hover:-rotate-45 transition-transform duration-300"
					width={50}
					height={50}
				/>
				<Font_64px
					label={"PREV"}
					family={"font-bricolage_grotesque"}
					align={"text-center"}
					weight={"font-semibold"}
					leading={"leading-none"}
				/>
			</Link>
			<Link
				className="flex cursor-pointer items-center justify-end group hover:justify-between transition-all duration-300"
				href={nextSrc}
			>
				<Font_64px
					label={"NEXT"}
					family={"font-bricolage_grotesque"}
					align={"text-center"}
					weight={"font-semibold"}
					leading={"leading-none"}
					color={"text-white"}
				/>
				<Image
					src="/images/diagonal-arrow-right-up.svg"
					width={50}
					height={50}
					alt="Diagonal Arrow Right Down"
					className="md:w-20 w-6 md:h-20 h-6 md:ml-2 ml-0 transform group-hover:rotate-45 transition-transform duration-300"
				/>
			</Link>
		</div>
	);
}
