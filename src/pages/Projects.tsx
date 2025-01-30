import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import localMusicFinderLogo from "../images/music-finder-logo.png";
import personalWebsiteImage from "../images/personal-website.png";
import threeTriosImage from "../images/three-trios.png";
import squareGameImage from "../images/square-game.png";
import goodDogLicensingImage from "../images/good-dog-licensing.png";
import ludisImage from "../images/ludis.png";
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
        <ProjectCard
          imgSrc={goodDogLicensingImage}
          title="Good Dog Licensing"
          descriptionBullets={[
            "Full-stack web app that automates the music licensing process for Northeastern’s student-run licensing organization.",
            "Leading/collaborating with team of 5 developers and 2 designers.",
            "Developed authentication system from scratch, including email verifications and password resets.",
          ]}
          skills={[
            "TypeScript",
            "React",
            "PostgreSQL",
            "Docker",
            "tRPC",
            "Tailwind CSS",
          ]}
          gitHubLink="https://github.com/sandboxnu/good-dog-licensing"
          websiteLink="https://good-dog-licensing.vercel.app/"
          backendLink=""
          frontendLink=""
        />
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
          imgSrc={ludisImage}
          title="Ludis"
          descriptionBullets={[
            "Collaborated with team of 4 developers to create a full-stack web application that matches people with gym partners.",
            "Developed an account creation system including personal information, gym preferences, and a profile picture.",
            "Built profile filtering system and chat system to allow communication between users.",
          ]}
          skills={["TypeScript", "React", "Next.js", "Supabase", "Material UI"]}
          gitHubLink="https://github.com/caiodasilva2005/Ludis"
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={personalWebsiteImage}
          title="Personal Website"
          descriptionBullets={["You are here!"]}
          skills={["TypeScript", "React", "Tailwind CSS", "Vercel"]}
          gitHubLink="https://github.com/jpraissman/personal-website"
          websiteLink=""
          backendLink=""
          frontendLink=""
        />
        <ProjectCard
          imgSrc={squareGameImage}
          title="Square Game"
          descriptionBullets={[
            "Built a 2-player PvP game where players control squares and attack the opposing square.",
            "Includes networking which allows players to play against each other on different computers.",
            "Created custom networking protocol to send/receive game data between computers.",
          ]}
          skills={["Java", "Processing"]}
          gitHubLink="https://github.com/jpraissman/square-game-new"
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
