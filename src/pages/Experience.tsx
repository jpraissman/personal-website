import ExperienceCard from "../components/ExperienceCard";
import NavBar from "../components/NavBar";
import sandboxImage from "../images/sandbox.png";
import mtwfyImage from "../images/mtwfy.png";
import tmcImage from "../images/tmc.jpg";

function Experience() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen items-center bg-sky-600">
      <NavBar />
      <div className="grid grid-cols-1 gap-10 p-10 place-items-center">
        <ExperienceCard
          imgSrc={sandboxImage}
          title="Project Lead & Full-stack Developer"
          companyAndDate="Sandbox at Northeastern | Sept. 2024 - Present"
          descriptionBullets={[
            "Developing a full-stack web application with a team of 5 developers / 2 designers to automate the entire music licensing process for Good Dog Licensing, Northeastern’s student-run licensing organization.",
            "Collaborating with team through weekly stand-up, pair programming, code reviews, and Git/GitHub",
            "Promoted to Project Lead starting January 2025.",
          ]}
          skills={["TypeScript", "React", "Docker", "tRPC"]}
          companyWebsite="https://www.sandboxnu.com/"
        />
        <ExperienceCard
          imgSrc={mtwfyImage}
          title="Data & Technology Associate"
          companyAndDate="Make Tech Work For You | May 2021 - Sept. 2024"
          descriptionBullets={[
            "Completed 20+ projects for 4 clients that focused on optimizing business processes (3 examples below).",
            "Developed and launched a student portal used by 100+ students that enables them to create accounts, update important personal information, self-report grades, sign up for events, etc.",
            "Built portal using FormAssembly with custom HTML/CSS/JavaScript that integrates with Salesforce.",
            "Created a Salesforce app with custom data structures and process flows to streamline client’s workforce development program, saving employees 10+ hours of work per week while improving data accuracy.",
            "Coded process in Python that used the Expensify API to automate client’s expense tracking report.",
          ]}
          skills={[
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "Google Cloud Platform",
            "Salesforce",
          ]}
          companyWebsite="https://www.maketechworkforyou.com/"
        />
        <ExperienceCard
          imgSrc={tmcImage}
          title="Freelance Software Developer"
          companyAndDate="The Management Center | April 2024 - June 2024"
          descriptionBullets={[
            "Automated 2 weekly manual tasks of downloading, analyzing, formatting, and neatly displaying recruiting data from JazzHR (client’s recruiting software) into Google Sheets.",
            "These automations saved employees an estimated 4+ hours of time-consuming work every week and were built using Python, JazzHR API, Google Sheets API, and Google Cloud Functions.",
          ]}
          skills={[
            "Python",
            "Google Cloud Platform",
            "JazzHR API",
            "Google Sheets API",
          ]}
          companyWebsite="https://www.managementcenter.org/"
        />
      </div>
    </div>
  );
}

export default Experience;
