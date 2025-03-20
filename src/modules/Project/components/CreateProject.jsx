export default function CreateProject() {
    return (
      <div className="h-[800px] bg-black flex justify-center items-center">
        <div className="max-w-lg mx-auto p-10 bg-gray-900 text-white shadow-lg h-auto rounded-lg border border-white">
          <h1 className="text-4xl text-white font-bold mb-6 text-center uppercase drop-shadow-neon">Upload Your Game</h1>
          <form className="space-y-6 text-white font-medium">
            <input
              type="text"
              name="projectId"
              placeholder="Project ID"
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-500 shadow-neon"
              required
            />
            <input
              type="text"
              name="gameName"
              placeholder="Game Name"
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-500 shadow-neon"
              required
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-500 shadow-neon"
              required
            />
            <input
              type="url"
              name="thumbnail"
              placeholder="Thumbnail URL"
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-500 shadow-neon"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-500 shadow-neon"
              required
            ></textarea>
            <input
              type="file"
              name="projectFile"
              className="w-full p-2 border border-white rounded bg-black text-gray-500 shadow-neon"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 font-semibold shadow-neon"
            >
              Upload Game
            </button>
          </form>
        </div>
      </div>
    );
}