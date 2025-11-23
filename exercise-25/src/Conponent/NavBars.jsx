import { NavLink } from "react-router"


const NavBars = () => {
  return (
<nav className="bg-white shadow-md p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-rose-600">Recipe Book</h1>
          <div className="space-x-6">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `hover:text-rose-600 ${isActive ? 'text-rose-600 font-bold' : 'text-gray-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/recipe"
              className={({ isActive }) => 
                `hover:text-rose-600 ${isActive ? 'text-rose-600 font-bold' : 'text-gray-600'}`
              }
            >
              Recipes
            </NavLink>
            <NavLink 
              to="/categories"
              className={({ isActive }) => 
                `hover:text-rose-600 ${isActive ? 'text-rose-600 font-bold' : 'text-gray-600'}`
              }
            >
              Categories
            </NavLink>
          </div>
        </div>
      </nav>
      
  )
}

export default NavBars;