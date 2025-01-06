import ExperienceCard from "../components/ExperienceCard";
import NavBar from "../components/NavBar";
import sandboxImage from "../images/sandbox.png";
import mtwfyImage from "../images/mtwfy.png";
import tmcImage from "../images/tmc.jpg";
import oasisImage from "../images/oasis.jpg";
import Footer from "../components/Footer";
import { LinkedIn } from "@mui/icons-material";
import * as motion from "motion/react-client";

function Experience() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen items-center bg-sky-600">
      <NavBar />
      <motion.span
        initial={{ y: "-500%" }}
        animate={{ y: "0" }}
        transition={{ duration: 2 }}
        className="text-center text-white text-xl font-semibold pt-2"
      >
        Read more about these experiences on{" "}
        <a
          className="hover:text-gray-200"
          href="https://www.linkedin.com/in/jordan-praissman/details/experience/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </a>
      </motion.span>
      <div className="grid grid-cols-1 p-10 place-items-center">
        <ExperienceCard
          imgSrc={sandboxImage}
          title="Project Lead & Full-stack Developer"
          company="Sandbox at Northeastern"
          dates={"Sept. 2024 - Present"}
          description="Leading a team through the development of a full-stack web application for
          Northeastern's student-led software consultancy."
          skills={[
            "TypeScript",
            "React",
            "PostgreSQL",
            "Docker",
            "tRPC",
            "Tailwind CSS",
          ]}
          companyWebsite="https://www.sandboxnu.com/"
        />
        <ExperienceCard
          imgSrc={mtwfyImage}
          title="Data & Technology Associate"
          company="Make Tech Work For You"
          dates="May 2021 - Sept. 2024 (3 yrs 5 months)"
          description="Completed 20+ projects for 4 clients that focused on optimizing and automating 
          business processes."
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
          company="The Management Center"
          dates="April 2024 - June 2024 (3 months)"
          description="Developed Python scripts to automate 2 weekly manual tasks for company."
          skills={[
            "Python",
            "Google Cloud Platform",
            "JazzHR API",
            "Google Sheets API",
          ]}
          companyWebsite="https://www.managementcenter.org/"
        />
        <ExperienceCard
          imgSrc={oasisImage}
          title="Software Developer"
          company="Oasis at Northeastern"
          dates="Jan. 2024 - May 2024 (5 months)"
          description="Collaborated with team of 4 developers to create a web application
          that matches people with gym partners."
          skills={["TypeScript", "React", "Next.js", "Supabase", "Material UI"]}
          companyWebsite="https://oasisneu.com/"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
