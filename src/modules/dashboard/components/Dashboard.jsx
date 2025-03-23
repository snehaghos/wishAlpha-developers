import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity, Gamepad, Users } from "lucide-react";

const Dashboard = () => {
  
  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/create-project");
  };

  const pieData = [
    { name: 'Chess', value: 400 },
    { name: 'Minesweeper', value: 300 },
    { name: 'Reversi', value: 300 },
    { name: 'Ludo', value: 200 },
  ];



  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const barData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jul', uv: 3490, pv: 4300 },
  ];

  const stats = [
    { label: "No of Games Uploaded", value: 38, icon: <Gamepad className="w-6 h-6 text-blue-400" /> },
    { label: "No of Game Views", value: 5000, icon: <Users className="w-6 h-6 text-green-400" /> },
    { label: "No of User Interactions", value: 1200, icon: <Activity className="w-6 h-6 text-violet-400" /> },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-400">Dashboard</h1>
        <button onClick={handleCreateProject} className="px-4 py-2 bg-violet-700 text-white rounded-md hover:bg-violet-800 transition">
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 flex items-center space-x-4 bg-gray-800 rounded-md shadow-md">
            {stat.icon}
            <div>
              <p className="text-md font-semibold text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-blue-300">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-blue-300">Game Distribution</h2>
          <PieChart width={400} height={400}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} label fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="p-6 bg-gray-800 rounded-md shadow-md ">
          <h2 className="text-lg font-bold text-blue-300">Monthly Stats</h2>
          <BarChart width={500} height={300} data={barData} className="mt-12">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-violet-400 mt-6">Active Games</h2>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {["Chess", "Minesweeper", "Reversi", "Ludo"].map((game, i) => (
          <div key={i} className="flex items-center p-4 space-x-4 bg-gray-800 rounded-md shadow-md">
            <img src={`./images/${game.toLowerCase()}.png`} alt={game} className="w-16 h-16 rounded-md border" />
            <div>
              <p className="text-lg font-semibold text-blue-300">{game}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
