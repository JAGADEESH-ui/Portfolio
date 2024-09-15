import ProjectHeadingComponent from "@/modules/body/projects/FTPlane/project-heading";
import ProjectInfoComponent from "@/modules/body/projects/FTPlane/projectInfo";
import VideoComponent from "@/modules/body/projects/FTPlane/video-component";
import FooterComponent from "@/modules/footer";

export default function Travalingo() {
	return (
		<div className="content-container flex flex-col md:gap-20 gap-10 bg-black ">
			<VideoComponent videoSrc={"/videos/Travalingo.mp4"} />
			<ProjectHeadingComponent
				label={"TRAVALINGO"}
				projectSrc={"https://travalingo-894aa.web.app/"}
			/>
			<ProjectInfoComponent
				projectInfo={
					"Travalingo is landing page for travel and tourism companies followed  by modern and slick design trends, where we've used HTML and CSS to create  an engaging and user-friendly landing  page. With HTML, we've structured the content of our website, creating a clear and logical layout that's easy to navigate. we've used HTML to organize our text, headings, images and other content elements into meaningful sections, making it easy for you to find what you're looking for. To enhance the appeal of our website , we've useed CSS to add style and personality to our design."
				}
				credits={[{ creditLabel: "Giovanni" }]}
				technologies={[
					{ techLabel: "HTML" },
					{ techLabel: "CSS" },
					{ techLabel: "FireBase" },
				]}
			/>
			<FooterComponent prevSrc={"/FTPlane"} nextSrc={"/"} />
		</div>
	);
}
