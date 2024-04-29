
import { HiArrowSmRight } from "react-icons/hi";
import Header from "./Header";

const FigmaProjects = () =>{
    return(
        <div>
            <div className="figmaprojects_header"><Header/></div>
            <div className="web_project_container mt-48">
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\figma1.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">Home Buying Website</h2> */}
                    <a href=" https://basitkhokhar.github.io/project-figma/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\figma1.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">Home Buying Website</h2> */}
                    <a href=" https://basitkhokhar.github.io/project-figma/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\figma1.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">Home Buying Website</h2> */}
                    <a href=" https://basitkhokhar.github.io/project-figma/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
            </div>
        </div>
    )
}
export default FigmaProjects;