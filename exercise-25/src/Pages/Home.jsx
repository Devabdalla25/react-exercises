import { Link } from "react-router";


const Home = () => {
  return (
    <div className="text-center gap-6 mt-6">
      <h1 className="font-bold text-4xl text-gray-900 mb-4">Welcome to recipe Book</h1>
      <p className="text-gray-500 text-xl mb-4">discover delicious recipes and start here cooking today!</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link  to="/recipe"   className="bg-rose-600 text-white p-6 rounded-lg shadow-md hover:bg-rose-700 transition-colors justify-center items-center">
        <h1 className="font-bold text-2xl mb-2">Browse Recipes </h1>
        <p >Explore our collection of dilicious recipe</p>
        </Link>
        <Link to='/categories'  className="bg-rose-600 text-white p-6 rounded-lg shadow-md hover:bg-rose-700 transition-colors justify-center items-center">
        <h1 className="font-bold text-2xl mb-2">Recipes Categories</h1>
        <p className="tetx-sm">Find ricepes by categories</p>
        </Link>
      </div>
    </div>
  )
}

export default Home;



