function NavBar() {
  return (
    <div className="grid grid-cols-12 w-screen gap-4 items-center">
      <div className="col-span-4 justify-items-start p-4">
        <a href={"/"} className="text-2xl text-white font-bold">
          Jordan Praissman
        </a>
      </div>
      <div className="col-span-8 justify-items-end text-white p-4 pl-8">
        <div className="space-x-8">
          <a href={"/experience"}>Experience</a>
          <a href={"/projects"}>Projects</a>
          <a href={"/resume"}>Resume</a>
          <a href={"/play"}>Play</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
