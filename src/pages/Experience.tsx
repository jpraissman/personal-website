import ExperienceCard from "../components/ExperienceCard";
import NavBar from "../components/NavBar";
import sandboxImage from "../images/sandbox.png";

function Experience() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen items-center bg-sky-600">
      <NavBar />
      <div className="grid grid-cols-1 gap-10 p-10 place-items-center">
        <ExperienceCard
          imgSrc={sandboxImage}
          title="Project Lead & Full-stack Developer"
          companyAndLocation="Sandbox at Northeastern | Sept. 2024 - Present"
          descriptionBullets={[
            "Developing a full-stack web application with a team of 5 developers / 2 designers to automate the entire music licensing process for Good Dog Licensing, Northeastern’s student-run licensing organization.",
            "Collaborating with team through weekly stand-up, pair programming, code reviews, and Git/GitHub",
            "Promoted to Project Lead starting January 2025.",
          ]}
          skills={["TypeScript", "React", "Docker", "tRPC"]}
        />
        <ExperienceCard
          imgSrc={sandboxImage}
          title="Project Lead & Full-stack Developer"
          companyAndLocation="Sandbox at Northeastern | Sept. 2024 - Present"
          descriptionBullets={[
            "Developing a full-stack web application with a team of 5 developers / 2 designers to automate the entire music licensing process for Good Dog Licensing, Northeastern’s student-run licensing organization.",
            "Collaborating with team through weekly stand-up, pair programming, code reviews, and Git/GitHub",
            "Promoted to Project Lead starting January 2025.",
          ]}
          skills={["TypeScript", "React", "Docker", "tRPC"]}
        />
      </div>
    </div>
  );
}

export default Experience;
