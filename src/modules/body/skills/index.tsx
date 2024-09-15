import Font_32px, { Font_24px } from "@/modules/common/labels";
import SectionHeadingComponent from "@/modules/common/section-heading";

export default function SkillsComponent() {
	const array = [
		{
			label1: "HTML",
			label2: "CSS",
			label3: "JavaScript",
			label4: "Web Development",
		},
		{
			label1: "React JS",
			label2: "React Native",
			label3: "Next JS",
			label4: "Frameworks",
		},
		{
			label1: "Git",
			label2: "Figma",
			label3: "Adobe Illustrator",
			label4: "Tools and Version Control",
		},
		{
			label1: "SQL",
			label2: "Node JS",
			label3: "",
			label4: "Backend and Database Management",
		},
	];
	return (
		<>
			<div id="skills" className="flex flex-col gap-10 md:gap-20">
				<SectionHeadingComponent label={"SKILLS"} />
				<div className="md:flex md:flex-row grid grid-cols-2 gap-3 w-full justify-evenly items-center">
					{array.map((i: any) => (
						<div
							key={i}
							className="rounded-2xl border-4 w-full h-full border-blue-600 flex flex-col justify-between p-2 md:p-5 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 md:w-[23%] aspect-square"
						>
							<div className="flex flex-col">
								<Font_24px label={i.label1} colo />
								<Font_24px label={i.label2} />
								<Font_24px label={i.label3} />
							</div>
							<Font_32px weight={"font-semibold"} label={i.label4} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
