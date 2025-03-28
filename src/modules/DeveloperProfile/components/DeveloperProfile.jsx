import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaPlusCircle,
  FaTwitter,
} from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import useDeveloperProfileContext from "../context/features/useDeveloperProfileContext";
import DeveloperProfileContextProvider from "../context/DeveloperProfileContextProvider";
import ProfileModal from "../../../components/ProfileModal/ProfileModal";
import { Link } from "react-router-dom";

function DeveloperProfile() {
  const { open, click } = useDeveloperProfileContext();
  return (
    <>
      <DeveloperProfileContextProvider>
        <div className="bg-[url(/images/2.png)] w-full min-h-screen bg-cover p-5 flex flex-col">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row w-full h-auto md:h-60 rounded-md justify-between relative p-3 bg-[#4240402d] border-4 border-gray-800 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative">
                <img
                  src="/images/profile1.jpg"
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-800 shadow-lg"
                />
                <Link to="/update-profile"
                  className="cursor-pointer absolute bottom-2 right-2 bg-[#424040bf] p-2 rounded-full shadow-md hover:bg-gray-700"
                  onClick={() => click(true)}
                >
                  <HiPencil size={19} className="text-white" />
                </Link>
              </div>
              <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl text-blue-400 font-bold">
                  Dipika Mandal
                </h1>
                <span className="text-md font-semibold text-gray-400">
                  Deepi
                </span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex mt-4 md:mt-20 justify-center md:justify-end">
              <div className="flex space-x-3 text-2xl md:text-4xl">
                <a href="#" className="text-violet-700 hover:text-violet-800 transition">
                  <FaGithub />
                </a>
                <a href="#" className="text-violet-700 hover:text-violet-800 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-violet-700 hover:text-violet-800 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Stats and Bio */}
          <div className="flex flex-col md:flex-row w-full h-auto md:h-20 rounded-md justify-between relative p-3 bg-[#424040a9] mt-4">
            <div className="flex flex-wrap justify-center md:gap-6 text-center">
              <div className="p-2">
                <p className="text-xl font-bold text-blue-300">930k</p>
                <p className="text-gray-400 text-sm">CLIP VIEWS</p>
              </div>
              <div className="hidden md:block text-white text-4xl">|</div>
              <div className="p-2">
                <p className="text-xl font-bold text-blue-300">82</p>
                <p className="text-gray-400 text-sm">CLIPS</p>
              </div>
              <div className="hidden md:block text-white text-4xl">|</div>
              <div className="p-2">
                <p className="text-xl font-bold text-blue-300">5.7K</p>
                <p className="text-gray-400 text-sm">FOLLOWERS</p>
              </div>
              <div className="hidden md:block text-white text-4xl">|</div>
              <div className="p-2">
                <p className="text-xl font-bold text-blue-300">24</p>
                <p className="text-gray-400 text-sm">FOLLOWING</p>
              </div>
            </div>
            <p className="text-gray-400 text-center md:text-left mt-4 md:mt-0">
              Grandmaster Zoe main and always looking for friends to play with. Valorant noobie and I like getting carried.
              <FaHeart className="inline text-red-500 ml-1" />
            </p>
          </div>

          {/* Games Section */}
          <div className="flex flex-col md:flex-row mt-6 gap-6">
            <div className="w-full p-3 bg-[#424040a9]">
              <h2 className="text-xl text-blue-300 border-b border-blue-500 pb-2 font-semibold">
                Watching Deepi’s Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    name: "Reversi",
                    image: "/images/reversi.png",
                    desc: "The classic strategy game of flipping discs and conquering the board!",
                  },
                  {
                    name: "Minesweeper",
                    image: "/images/mines.png",
                    desc: "Uncover tiles, avoid mines, and put your logic to the test!",
                  },
                  {
                    name: "Checkers",
                    image: "/images/chess.png",
                    desc: "Jump, capture, and strategize your way to victory in Checkers!",
                  },
                ].map((game, index) => (
                  <div key={index} className="bg-[#2120209c] p-4 h-36 rounded-lg flex items-center gap-4">
                    <img src={game.image} alt={game.name} className="w-20 h-20 rounded cursor-pointer" />
                    <div className="flex flex-col">
                      <p className="text-blue-300 border-b border-blue-500">{game.name}</p>
                      <p className="text-gray-400 text-sm">{game.desc}</p>
                    </div>
                  </div>
                ))}
                {/* Add New Game */}
                <div className="bg-[#2120209c] text-6xl sm:text-8xl h-36 p-4 rounded-lg flex items-center justify-center text-violet-700 hover:text-violet-800 transition cursor-pointer">
                  <FaPlusCircle />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full p-3 bg-[#424040a9]">
              <h2 className="text-xl text-blue-300 border-b border-blue-500 pb-2 font-semibold">
                Watching Deepi’s Skills
              </h2>
              {/* Add Skills Here */}
            </div>
          </div>
        </div>
        {open && <ProfileModal />}
      </DeveloperProfileContextProvider>
    </>
  );
}

export default DeveloperProfile;


