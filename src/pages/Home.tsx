import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import me2Image from "../images/Me2.jpeg";
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
            src={me2Image}
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
              I'm a 3rd-year Computer Science major at{" "}
              <strong>Northeastern University</strong> pursuing a career in
              software engineering.
              <br />
              <br />
              I'm currently a part-time software engineer (previously a
              full-time co-op) at SimpliSafe, where I contribute to internal
              tools to help agents manage orders, RMAs, and leads. I'm also a
              project lead & software developer at Sandbox, Northeastern's
              student-led software consultancy, where I'm leading/collaborating
              with a team to develop a full-stack web app to automate an
              organization's music licensing process.
              <br />
              <br />
              In my free time, I work on{" "}
              <a
                href="https://thelocalmusicfinder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-200"
              >
                TheLocalMusicFinder.com
              </a>
              , a platform connecting local venues, musicians, and music fans
              with 2,000 monthly users and growing. Feel free to connect with
              me!
            </h3>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
