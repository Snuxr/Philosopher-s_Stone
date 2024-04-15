import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-gray-100 text-base h-screen w-screen bg-gradient-to-t from-gray-950 via-purple-800 to-gray-950 flex justify-center items-center overflow-hidden">
      <div className="w-cover h-cover bg-gray-950 rounded-3xl bg-center bg-fixed bg-opacity-90 overflow-x-hidden overflow-y-auto m-2 p-6">
        <NavBar />
      </div>
      {/* Style for hiding the scroll bar */}
      <style>
        {`
          .overflow-auto::-webkit-scrollbar {
            width: 0 !important;
          }
          .overflow-y-auto {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>
    </div>
  );
};

export default App;
