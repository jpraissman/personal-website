function NavBar() {
  return (
    <div className="flex flex-col justify-between md:flex-row max-w-screen gap-4 items-center p-4">
      <div className="text-left">
        <a
          href={"/"}
          className="text-3xl text-white font-bold hover:text-gray-300"
        >
          Jordan Praissman
        </a>
      </div>
      <div className="space-x-8 text-xl text-right text-white font-semibold">
        <a className="hover:text-gray-300" href={"/experience"}>
          Experience
        </a>
        <a className="hover:text-gray-300" href={"/projects"}>
          Projects
        </a>
        <a
          className="hover:text-gray-300"
          href={
            "https://drive.google.com/file/d/1ZKH8KhJhLFV0jSkLDFzzbPD-Ue5l6-GM/view?usp=sharing"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default NavBar;
