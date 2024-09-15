import { Font_190px, Font_72px } from "../common/labels";

export default function Header() {
	return (
		<div className="flex justify-center items-center py-4">
			<div className="flex flex-col my-32 md:my-0">
				<Font_72px
					label={"Jagadeesh"}
					family={"font-caveat"}
					align={"text-center"}
					leading={"leading-none"}
					color={"text-blue-600 text-wrap w-fit"}
				/>
				<Font_190px
					label={"SOFTWARE"}
					family={"font-poppins"}
					align={"text-center"}
					weight={"font-bold"}
					leading={"leading-none"}
					color={"text-white text-wrap w-fit"}
				/>
				<Font_190px
					label={"DEVELOPER"}
					family={"font-poppins"}
					align={"text-center"}
					weight={"font-bold"}
					leading={"leading-none"}
					color={"text-white text-wrap w-fit"}
				/>
				<Font_190px
					label={"PORTFOLIO"}
					family={"font-poppins"}
					align={"text-center"}
					weight={"font-bold"}
					leading={"leading-none"}
					color={"text-white text-wrap w-fit"}
				/>
			</div>
		</div>
	);
}
