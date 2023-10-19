import React from 'react';

function Pagination({ capsulesPerPage, totalCapsules, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCapsules / capsulesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex justify-center mt-7'>
      <ul className='flex m-2'>
        {pageNumbers.map((number) => (
          <li className=' mx-2 cursor-pointer hover:text-opacity-50 hover:scale-110 font-bold  text-xl px-2 text-primary-500' key={number}>
            <button onClick={()=>paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
