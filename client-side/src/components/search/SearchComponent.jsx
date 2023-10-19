import React, { useContext, useRef } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function SearchComponent() {
  const {
    searchInput,
    setSearchInput,
    setStatusFilter,
    setLaunchFilter,
    setTypeFilter,
  } = useContext(SearchContext);

  const StatusFilterRef = useRef();
  const LaunchFilterRef = useRef();
  const TypeFilterRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusFilter(StatusFilterRef.current.value);
    setLaunchFilter(LaunchFilterRef.current.value);
    setTypeFilter(TypeFilterRef.current.value);
    console.log(LaunchFilterRef.current.value);
  };
  return (
    <section
      id="search"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-3/4  -left-24 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Search Capsules</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
          asperiores quibusdam? Cupiditate aspernatur, quas ratione culpa
          recusandae quasi adipisci rerum dolorem sit vero quod? Tenetur quidem
          assumenda unde repudiandae dolor.
        </p>
      </div>
      <div>
        <div>
          <div className="flex">
            <input
              value={searchInput}
              name="search"
              type="search"
              id="search"
              onChange={(e) => {
                setSearchInput(e.target.value);
                console.log(searchInput);
              }}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-l-lg block w-full p-2.5"
              placeholder="Type in capsule serial number..."
            />

            <div className="bg-primary-500 text-white font-medium py-2.5 px-3 rounded-r-lg w-fit">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
        <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
          <div className="flex justify-between flex-wrap">
            <div className="mb-6 mr-1">
              <label
                htmlFor="status"
                className="text-white block mb-2 text-sm font-medium"
              >
                Filter capsules by status
              </label>
              <select
                ref={StatusFilterRef}
                id="status"
                className="cursor-pointer bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-amber-500  focus:border-amber-500 block w-full p-2.5"
              >
                <option defaultValue value="">
                  No filter
                </option>
                <option value="active">active</option>
                <option className=" hover:bg-amber-500" value="retired">
                  retired
                </option>
                <option value="destroyed">destroyed</option>
                <option value="unknown">unknown</option>
              </select>
            </div>
            <div className="mb-6 mr-1">
              <label
                htmlFor="original_launch"
                className="text-white block mb-2 text-sm font-medium"
              >
                Filter capsules by original launch
              </label>
              <select
                ref={LaunchFilterRef}
                id="original_launch"
                className="cursor-pointer bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-amber-500  focus:border-amber-500 block w-full p-2.5"
              >
                <option defaultValue value={''}>
                  No filter
                </option>
                <option value={['2010', '2011', '2012']}>2010-2012</option>
                <option
                  className=" hover:bg-amber-500"
                  value={['2013', '2014', '2015']}
                >
                  2013-2015
                </option>
                <option value={['2016', '2017', '2018']}>2016-2018</option>
                <option value={['2019', '2020', '2021', '2022', '2023']}>
                  2019-2023
                </option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="type"
                className="text-white block mb-2 text-sm font-medium"
              >
                Filter capsules by type
              </label>
              <select
                ref={TypeFilterRef}
                id="type"
                className="cursor-pointer bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-amber-500  focus:border-amber-500 block w-full p-2.5"
              >
                <option defaultValue value="">
                  No filter
                </option>
                <option value="Dragon 1.0">Dragon 1.0</option>
                <option className=" hover:bg-amber-500" value="Dragon 1.1">
                  Dragon 1.1
                </option>
                <option value="Dragon 2.0">Dragon 2.0</option>
              </select>
            </div>
          </div>
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Include search filters
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchComponent;
