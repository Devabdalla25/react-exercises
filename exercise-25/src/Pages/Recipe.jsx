import React from 'react'
import { Link } from 'react-router';


export const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'Desserts'
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'Dinner'
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'Lunch'
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'Breakfast'
  },
    {
    id: 5,
    title: "Drink",
    description: "Classic Italian coffee-flavored dessert",
    category: "Drinks",
  },
];
const Recipe = () => {
  return (
    <div className='max-w-4xl mx-auto'>
       <h2 className="text-3xl font-bold mb-6">All Recipes</h2>
       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {
          recipes.map(re=>(
            <Link key={re.id} to={`/Recipe/${re.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className='p-6 space-y-4'>
                <h3 className='text-xl font-semibold mb-2'>{re.title}</h3>
                <p className="text-gray-600 mb-4">{re.description}</p>
                <span className="inline-block bg-rose-100 text-rose-800 text-sm  p-2 rounded">{re.category}</span>
              </div>
            </Link>
          ))
        }
       </div>

    </div>
  )
}

export default Recipe;