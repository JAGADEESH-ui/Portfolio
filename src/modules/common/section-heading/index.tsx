import Font_32px from "../labels";
import Image from "next/image";

export default function SectionHeadingComponent({ label }: any) {
	return (
		<div className="flex ">
			<Font_32px
				label={label}
				weight={"font-semibold"}
				family={"font-bricolage_grotesque"}
			/>
			<Image
				src="/images/diagonal-arrow-right-down.svg"
				alt="Diagonal Arrow Right Down"
				className="w-10 h-10 ml-2"
				width={50}
				height={50}
			/>
		</div>
	);
}
