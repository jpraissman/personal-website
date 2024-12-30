import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import meImage from "../images/Me.jpg";
import localMusicFinderLogo from "../images/music-finder-logo.png";

function Projects() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen items-center bg-sky-600">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-10 place-items-center">
        <ProjectCard
          imgSrc={localMusicFinderLogo}
          title="The Local Music Finder"
          description="The Local Music Finder is a website that allows bars and bands to connect with local
          music fans. "
          skills={["Python", "Typescript", "React", "React", "React"]}
          gitHubLink="https://github.com/jpraissman/local-music-finder-backend"
          websiteLink="https://www.thelocalmusicfinder.com/"
        />
        <ProjectCard
          imgSrc={localMusicFinderLogo}
          title="The Local Music Finder"
          description="The Local Music Finder is a website that allows bars and bands to connect with local
          music fans. "
          skills={["Python", "Typescript", "React", "React", "React"]}
          gitHubLink=""
          websiteLink=""
        />
      </div>
    </div>
  );
}

export default Projects;
