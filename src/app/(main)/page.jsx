import AboutComponent from "@/modules/body/about";
import ContactComponent from "@/modules/body/contact";
import MyprojectComponent from "@/modules/body/myprojects";
import SkillsComponent from "@/modules/body/skills";
import Header from "@/modules/header";
import NavBar from "@/modules/nav";
import { MyComponent } from "@/modules/webGl";

export default function main() {
	return (
		<MyComponent>
			<div className="w-full content-container flex flex-col md:gap-20 gap-10 scroll-smooth">
				<NavBar />
				<Header />
				<AboutComponent />
				<MyprojectComponent />
				<SkillsComponent />
				<ContactComponent />
			</div>
		</MyComponent>
	);
}
