import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-red-700");
  return (
    <div className={`w-full h-screen ${color}`}>
      <div className="flex justify-around gap-2 bottom-12 flex-wrap fixed inset-x-0">
        <div className="flex px-3 py-2 rounded-2xl  bg-white gap-2">
          <button
            onClick={() => setColor("bg-red-700")}
            className="text-white  rounded-2xl p-4 bg-red-700"
          >
            Red
          </button>
          <button
            onClick={() => setColor("bg-green-700")}
            className="text-white  rounded-2xl p-4 bg-green-700"
          >
            Green
          </button>
          <button
            onClick={() => setColor("bg-blue-700")}
            className="text-white  rounded-2xl p-4 bg-blue-700"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("bg-orange-700")}
            className="text-white  rounded-2xl p-4 bg-orange-700"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("bg-gray-700")}
            className="text-white  rounded-2xl p-4 bg-gray-700"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("bg-cyan-700")}
            className="text-white  rounded-2xl p-4 bg-cyan-700"
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
