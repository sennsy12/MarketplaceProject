import React from 'react';
import { Laptop, Car, Home, Shirt, Trees,Dumbbell,BookOpen,Puzzle,Handshake,Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';


const CategoryIcons = {
    'Electronics': <Laptop />,
    'Vehicles': <Car />,
    'Property': <Home />,
    'Fashion': <Shirt />,
    'Home & Garden': <Trees />,
     'Sports & Outdoors': <Dumbbell />,
    'Books & Media': <BookOpen />,
    'Toys & Games': <Puzzle />,
    'Services': <Handshake />,
     'Art & Collectibles': <Palette />,
};

const Categories = () => {
  const navigate = useNavigate();


  return (
      
          
     <header className="bg-white z-10 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
            
         <h2 className="text-xl font-semibold text-gray-800">Explore</h2>
            
        <div className='relative '>
         <div className=" rounded-md overflow-hidden ">
             <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 bg-white focus:outline-none rounded-md px-3 py-1 text-gray-600 placeholder:text-gray-400  pr-10  transition-shadow focus:shadow-sm text-sm w-52 sm:w-64"

                 />
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                     xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"
                     >
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                   </span>

           </div>
         </div>


        </div>

         <div className="max-w-7xl mx-auto px-4 pt-4 pb-6  ">
              <div className="grid grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-5 md:gap-y-8 ">
            {categories.map((category) => (
                 <div key={category.id}
                className="flex flex-col  items-center  text-center p-2 rounded-lg transition-transform duration-100 hover:scale-105   cursor-pointer"
                     onClick={() => navigate(`/category/${category.id}`)} >

                         <div className=" bg-teal-100 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-teal-600 text-2xl md:text-3xl   ">
                           {CategoryIcons[category.name]}
                          </div>

                    <span  className="text-gray-700  text-xs sm:text-sm mt-1 ">
                                {category.name}
                         </span>

                    </div>
                ))}
         
                </div>
          </div>
        </header>

  );
};

export default Categories;