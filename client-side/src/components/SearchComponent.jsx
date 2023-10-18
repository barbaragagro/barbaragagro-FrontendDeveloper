import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function SearchComponent() {
  return (
    <section
      id="search"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Search Capsules
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
          asperiores quibusdam? Cupiditate aspernatur, quas ratione culpa
          recusandae quasi adipisci rerum dolorem sit vero quod? Tenetur quidem
          assumenda unde repudiandae dolor.
        </p>
      </div>
      <div>

          <div className="flex" >
              <input
                name="search"
                type="search"
                id="search"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-l-lg block w-full p-2.5"
                placeholder="Search for capsules..."
              />
        
            
            <button
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-3 rounded-r-lg w-fit"
            >
              <MagnifyingGlassIcon className="h-5 w-5"/>
            </button>
          </div>
     
      </div>
    </section>
  );
}

export default SearchComponent;
