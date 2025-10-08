import TodoApp from "./TodoApp";

const App = () => {
  return (
    <div className="flex flex-col items-center  bg-white text-black w-full min-h-screen mt-2">
      <div className="flex gap-5 m-5 justify-center items-center">
        <span className="bg-purple-300 p-3 rounded-md w-40 h-12 flex justify-center items-center text-purple-600 text-lg font-semibold">
          Todo App
        </span>
        <h4 className="text-2xl font-medium text-gray-500">Study Timer</h4>
      </div>
      <TodoApp />
    </div>
  );
};

export default App;
