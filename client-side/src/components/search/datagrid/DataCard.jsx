import React from 'react';

function DataCard({ imgUrl, serial, status, date, type }) {
  return (
    <div>
      <div
        className=" rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      ></div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{serial}</h5>
        <p className="text-[#ADB7BE]">{status}</p>
        <p className="text-[#ADB7BE]">{type}</p>
        {date ? (
          <>
            <p className="text-[#ADB7BE]">year: {date.slice(0, 4)}</p>
            <p className="text-[#ADB7BE]">month: {date.slice(5, 7)}</p>
            <p className="text-[#ADB7BE]">day: {date.slice(8, 10)}</p>
          </>
        ) : (
          'No date available'
        )}
      </div>
    </div>
  );
}

export default DataCard;
