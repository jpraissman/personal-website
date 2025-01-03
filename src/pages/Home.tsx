import NavBar from "../components/NavBar";
import meImage from "../images/Me.jpg";

function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen items-center bg-sky-600">
      <NavBar />
      <div className="grid grid-cols-12 w-screen gap-4">
        <div className="col-span-5 justify-items-end">
          <img src={meImage} className="w-3/5 h-auto rounded-full" />
        </div>
        <div className="col-span-7 flex items-center justify-items-start w-4/5 pl-5 text-white">
          <div className="space-y-3">
            <h1 className="text-6xl font-bold">Jordan Praissman</h1>
            <h2 className="text-xl font-bold pt-3">A Bit About Me</h2>
            <h3 className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
