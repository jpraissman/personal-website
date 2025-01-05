import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="flex max-w-screen items-center gap-1 justify-center p-2 text-gray-200 text-lg">
      <span>Made by Test Testman | </span>
      <div className="flex flex-row gap-3">
        <a
          className="hover:text-gray-300"
          href={"https://www.linkedin.com/in/jordan-praissman/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          className="hover:text-gray-300"
          href={"https://github.com/jpraissman"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          className="hover:text-gray-300"
          href={"mailto:jordanpraissman@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
