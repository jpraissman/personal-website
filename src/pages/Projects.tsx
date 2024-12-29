import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen items-center bg-sky-600">
      <NavBar />
      <ProjectCard />
    </div>
  );
}

export default Projects;
