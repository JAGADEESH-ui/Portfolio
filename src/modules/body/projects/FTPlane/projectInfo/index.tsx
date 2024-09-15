import { Font_28px, Font_20px } from "@/modules/common/labels";

export default function ProjectInfoComponent({
	projectInfo,
	credits = null,
	technologies = null,
}: any) {
	return (
		<div className="flex flex-col w-full items-start gap-10 md:gap-20 my-20">
			<Font_28px
				label={"INFORMATION"}
				family={"font-bricolage_grotesque"}
				align={"text-center"}
				weight={"font-semibold"}
				leading={"leading-none"}
				color={"text-blue-600"}
			/>
			<div className="md:w-[45%] w-full flex gap-32 flex-col">
				<Font_20px
					label={projectInfo}
					family={"font-bricolage_grotesque"}
					align={"text-center"}
					weight={"font-semibold"}
					leading={"leading-none text-justify"}
				/>

				<div className="flex flex-row justify-between">
					{credits != null && credits.length > 0 && (
						<div className="flex flex-col items-start gap-2 md:gap-4">
							<Font_28px
								label={"CREDITS"}
								family={"font-bricolage_grotesque"}
								align={"text-center"}
								weight={"font-semibold"}
								leading={"leading-none"}
								color={"text-blue-600"}
							/>
							{credits.length > 0 &&
								credits.map((data: any) => (
									<Font_20px
										key={data.creditLabel}
										label={data.creditLabel}
										family={"font-bricolage_grotesque"}
										align={"text-center"}
										weight={"font-semibold"}
										leading={"leading-none text-justify"}
									/>
								))}
						</div>
					)}
					{technologies != null && technologies.length > 0 && (
						<div className="flex flex-col items-start gap-2 md:gap-4">
							<Font_28px
								label={"TECHNOLOGY"}
								family={"font-bricolage_grotesque"}
								align={"text-center"}
								weight={"font-semibold"}
								leading={"leading-none"}
								color={"text-blue-600"}
							/>
							{technologies.length > 0 &&
								technologies.map((data: any) => (
									<Font_20px
										key={data.techLabel}
										label={data.techLabel}
										family={"font-bricolage_grotesque"}
										align={"text-center"}
										weight={"font-semibold"}
										leading={"leading-none text-justify"}
									/>
								))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
