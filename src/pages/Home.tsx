import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import meImage from "../images/Me.jpg";
import * as motion from "motion/react-client";

function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen items-center bg-sky-600">
      <NavBar />
      <div className="grid grid-cols-12 max-w-screen gap-4 py-5">
        <div className="col-span-12 md:col-span-5 items-center md:justify-items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            src={meImage}
            className="w-3/5 h-auto rounded-full mx-auto md:mx-0"
          />
        </div>
        <div className="col-span-12 md:col-span-7 flex items-center w-full md:justify-items-start md:w-4/5 pl-5 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="space-y-3"
          >
            <h1 className="text-7xl font-bold">Jordan Praissman</h1>
            <h2 className="text-2xl font-bold pt-3">A Bit About Me</h2>
            <h3 className="text-lg">
              I'm a 2nd-year Computer Science major at{" "}
              <span className="font-bold">Northeastern University</span>{" "}
              pursuing a career in software engineering. I'm passionate about
              building software that improves and benefits people's lives.
              Currently, I'm a project lead & software developer at Sandbox,
              Northeastern’s student-led software consultancy, where I'm
              leading/collaborating with a team to develop a full-stack web app
              to automate an organization's music licensing process. In my free
              time, I work on{" "}
              <a
                href={"https://www.thelocalmusicfinder.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                TheLocalMusicFinder.com
              </a>
              , a platform connecting local venues, musicians, and music fans.
              Feel free to connect with me!
            </h3>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
