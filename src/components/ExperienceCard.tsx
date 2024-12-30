function ExperienceCard({
  imgSrc,
  title,
  companyAndDate,
  descriptionBullets,
  skills,
  companyWebsite,
}: {
  imgSrc: string;
  title: string;
  companyAndDate: string;
  descriptionBullets: string[];
  skills: string[];
  companyWebsite: string;
}) {
  return (
    <a
      href={companyWebsite}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full lg:w-4/5 flex-col md:flex-row h-auto items-center bg-white border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <img
        className="object-cover w-full h-auto md:h-80 md:w-auto rounded-t-lg"
        src={imgSrc}
        alt=""
      />
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-gray-900">
          {companyAndDate}
        </h3>
        <ul className="mb-6 font-normal text-gray-700 list-disc pl-4">
          {descriptionBullets.map((bullet: string) => (
            <li>{bullet}</li>
          ))}
        </ul>
        <div className="flex flex-row flex-wrap gap-1 pb-5">
          {skills.map((skill: string) => (
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ExperienceCard;
