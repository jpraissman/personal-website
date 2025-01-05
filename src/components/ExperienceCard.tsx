import BusinessIcon from "@mui/icons-material/Business";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import * as motion from "motion/react-client";

function ExperienceCard({
  imgSrc,
  title,
  company,
  dates,
  description,
  skills,
  companyWebsite,
}: {
  imgSrc: string;
  title: string;
  company: string;
  dates: string;
  description: string;
  skills: string[];
  companyWebsite: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.3 },
      }}
      className="flex w-full flex-col h-auto items-center"
    >
      <div className="h-[25px] w-[20px] bg-orange-500"></div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex w-full lg:w-4/5 xl:w-3/5 flex-col md:flex-row h-auto items-center bg-white rounded-lg shadow"
      >
        <a
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto rounded-t-lg hover:border-2 hover:border-gray-200"
        >
          <img
            className="object-cover w-full h-auto md:h-64 md:w-auto rounded-t-lg hover:border-2 hover:border-gray-200"
            src={imgSrc}
            alt=""
          />
        </a>
        <div className="flex flex-col justify-between p-4 gap-1 w-full md:w-4/6">
          <h5 className="pb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <div className="flex items-center space-x-2">
            <BusinessIcon fontSize="medium" className="text-blue-700" />
            <span className="text-lg font-semibold text-gray-900">
              {company}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <DateRangeIcon fontSize="medium" className="text-lime-700" />
            <span className="text-lg font-semibold text-gray-900">{dates}</span>
          </div>
          <div className="flex items-center space-x-2 pt-3 pb-5">
            <DescriptionIcon fontSize="small" className="text-orange-700" />
            <span className="text-md text-gray-900">{description}</span>
          </div>
          <div className="flex flex-row flex-wrap gap-1">
            {skills.map((skill: string) => (
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="h-[25px] w-[20px] bg-orange-500"></div>
    </motion.div>
  );
}

export default ExperienceCard;
