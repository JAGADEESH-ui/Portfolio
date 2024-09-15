import ProjectHeadingComponent from "@/modules/body/projects/FTPlane/project-heading";
import ProjectInfoComponent from "@/modules/body/projects/FTPlane/projectInfo";
import VideoComponent from "@/modules/body/projects/FTPlane/video-component";
import FooterComponent from "@/modules/footer";

export default function FTPlaneComponent() {
	return (
		<div className="content-container flex flex-col gap-10 md:gap-20 bg-black py-10">
			<VideoComponent videoSrc={"/videos/FT_Plane.mp4"} />
			<ProjectHeadingComponent
				label={"FT PLANE"}
				projectSrc={"https://ftplane-27ffb.web.app/"}
			/>
			<ProjectInfoComponent
				projectInfo={
					"FT PLANE landing page! we've used HTML and CSS to create a visually stunning and user-friendly interface. our landing page is designed to provide you with quick and easy access to the most important information about our company, including our services, schedules and pricing. Organized our content into meaningful sections, making it easy for you to find the information you need."
				}
				credits={[{ creditLabel: "Falcon thoughts" }]}
				technologies={[
					{ techLabel: "HTML" },
					{ techLabel: "CSS" },
					{ techLabel: "FireBase" },
				]}
			/>
			<FooterComponent prevSrc={"/"} nextSrc={"/Travalingo"} />
		</div>
	);
}
