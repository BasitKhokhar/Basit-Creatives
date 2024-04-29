
import { HiArrowSmRight } from "react-icons/hi";
import Header from "./Header";

const WebProjects = () =>{
    return(
        <div>
            <div className="webprojects_header"><Header/></div>
            <div className="web_project_container mt-48">
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\uni.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">website for a University</h2> */}
                    <a href="https://basitkhokhar.github.io/second-project/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\purple.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">website</h2> */}
                    <a href="https://basitkhokhar.github.io/Vuex/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\blue.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">website</h2> */}
                    <a href="https://basitkhokhar.github.io/second-project/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\light blue.png" alt="" />
                    {/* <h2 className=" text-4xl font-extrabold font-sans">Simple Portfolio Website</h2> */}
                    <a href=" https://basitkhokhar.github.io/projectfirst/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
                <div className="project1" data-aos="fade-up">
                    <img src="src\images\light yellow.png" alt="" />
                    <h2 className=" text-4xl font-extrabold font-sans">Fashion Blog Website</h2>
                    <a href=" https://basitkhokhar.github.io/projectfashionblog/"><div className="view_webproject font-sans"><h2>View Project</h2><div className="webs_arrow_icon"><HiArrowSmRight /></div></div></a>
                </div>
            </div>
        </div>
    )
}
export default WebProjects;