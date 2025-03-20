import React from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/create-project");
  }

  return (
    <div className="flex-1 p-4 bg-gray-900 text-white min-h-screen h-full overflow-y-auto">
      <h1 className="text-3xl font-bold text-blue-400 border-b-4 border-violet-500 pb-2 shadow-blue">
        Dashboard
      </h1>
      <button className="px-2 py-3 bg-violet-700 text-white rounded-md" onClick={handleCreateProject()}>Create Project</button>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {["No of games uploaded", "No of game views", "No of user interactions"].map((text, i) => (
          <div
            key={i}
            className="bg-glass p-4 rounded-lg text-center shadow-blue border border-blue-400 transition-transform transform hover:scale-105 hover:shadow-violet cursor-pointer"
          >
            <p className="text-md font-semibold text-violet-400">{text}</p>
            <p className="text-2xl font-bold text-blue-300">38</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {[{ src: "./images/graph.png", label: "Graph of uploaded games" }, { src: "./images/graph1.png", label: "Graph of game views" }].map((item, i) => (
          <div
            key={i}
            className="bg-glass p-6 rounded-lg text-center shadow-blue border border-violet-500 transition-transform transform hover:scale-105 hover:shadow-violet cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-20 h-20 rounded-lg mx-auto border-2 border-white shadow-blue"
            />
            <p className="text-violet-300 text-lg mt-2 font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-violet-400 mt-6 border-b-2 border-blue-500 pb-2 shadow-blue">
        Active Games
      </h2>
      <div className="bg-glass p-6 rounded-lg grid grid-cols-2 gap-6 mt-4 shadow-blue">
        {[
          { name: "Chess", image: "./images/chess.png", category: "Board Game" },
          { name: "Minesweeper", image: "./images/mines.png", category: "Puzzle Game" },
          { name: "Reversi (Othello)", image: "./images/reversi.png", category: "Strategy Game" },
          { name: "Ludo", image: "./images/ludo.png", category: "Classic Game" },
        ].map((game, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 bg-glass p-3 rounded-lg shadow-blue border border-blue-400 transition-transform transform hover:scale-105 hover:shadow-violet cursor-pointer"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-16 h-16 rounded-lg border-2 border-white shadow-blue"
            />
            <div>
              <p className="text-md font-semibold text-blue-300">{game.name}</p>
              <p className="text-sm text-violet-300">{game.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;