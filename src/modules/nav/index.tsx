import Link from "next/link";
import { Font_20px, Font_24px } from "../common/labels";

export default function NavBar() {
	return (
		<nav className="flex flex-row justify-end gap-5 py-5">
			<Link href="#work" className="group flex flex-col cursor-pointer">
				<Font_24px
					label={"Work"}
					weight={"font-semibold"}
					family={"font-bricolage_grotesque"}
				/>
				<span className="overflow-hidden w-0 group-hover:w-full transition-all duration-300 ease-out bg-white text-white group-hover:p-[2px]"></span>
			</Link>
			<Link href="#skills" className="group flex flex-col cursor-pointer">
				<Font_24px
					label={"Skills"}
					weight={"font-semibold"}
					family={"font-bricolage_grotesque"}
				/>
				<span className="overflow-hidden w-0 group-hover:w-full transition-all duration-300 ease-out bg-white text-white group-hover:p-[2px]"></span>
			</Link>
			<Link href="#contact" className="group flex flex-col cursor-pointer">
				<Font_24px
					label={"Contact"}
					weight={"font-semibold"}
					family={"font-bricolage_grotesque"}
				/>
				<span className="overflow-hidden w-0 group-hover:w-full transition-all duration-300 ease-out bg-white text-white group-hover:p-[2px]"></span>
			</Link>
		</nav>
	);
}
