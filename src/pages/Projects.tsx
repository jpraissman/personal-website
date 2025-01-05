import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import localMusicFinderLogo from "../images/music-finder-logo.png";
import personalWebsiteImage from "../images/personal-website.png";
import threeTriosImage from "../images/three-trios.png";
import squareGameImage from "../images/square-game.png";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen items-center bg-sky-600">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-10 place-items-center">
        <ProjectCard
          imgSrc={localMusicFinderLogo}
          title="TheLocalMusicFinder.com"
          descriptionBullets={[
            "Full-stack web app that connects local venues and musicians with music fans, primarily in Northern/Central New Jersey.",
            "150 users a week and growing.",
            "Developed a custom RESTful API for the backend.",
            "Integrated Google Maps API for dynamic event distance calculations based on user location.",
          ]}
          skills={[
            "Python",
            "TypeScript",
            "React",
            "Next.js",
            "PostgreSQL",
            "Flask",
            "Google Cloud Platform",
            "AWS",
          ]}
          gitHubLink=""
          websiteLink="https://www.thelocalmusicfinder.com/"
          backendLink="https://github.com/jpraissman/local-music-finder-backend"
          frontendLink="https://github.com/jpraissman/local-music-finder-frontend-new"
        />
        {/* <ProjectCard
          imgSrc={personalWebsiteImage}
          title="Personal Website"
          descriptionBullets={[
            "Full-stack web app that connects local venues and musicians with music fans, primarily in Northern/Central New Jersey.",
            "150 users a week and growing.",
            "Developed a custom RESTful API for the backend.",
            "Integrated Google Maps API for dynamic event distance calculations based on user location.",
          ]}
          skills={["TypeScript", "React", "Tailwind CSS", "Vercel"]}
          gitHubLink="https://github.com/jpraissman/personal-website"
          websiteLink=""
          backendLink=""
          frontendLink=""
        /> */}
        <ProjectCard
          imgSrc={threeTriosImage}
          title="Three Trios"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Designed and implemented a variation of the card game Triple Triad using the MVC design pattern, along with the Strategy, Adapter, and Observer design patterns.",
            "Collaborated on a team of 2 developers through pair programming sessions and using Git/GitHub.",
            "Tested entire codebase using JUnit with around 95% code coverage.",
          ]}
          skills={["Java", "JUnit", "Java Swing"]}
          gitHubLink=""
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
