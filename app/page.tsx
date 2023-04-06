import Sidebar from "./components/Sidebar";
import MainDisplay from "./components/MainDisplay";
import Player from "./components/Player";

function HomePage() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <MainDisplay />
      </main>
      <div className=" sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export default HomePage;
