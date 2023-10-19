import React, { useRef, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

function DataCard({ serial, status, date, type, missionName }) {
  const dots = useRef();
  const moreData = useRef();
  const btn = useRef();

  const [isDownIcon, setIsDownIcon] = useState(true);
  const readMoreFunction = () => {
    if (dots.current.style.display === 'none') {
      dots.current.style.display = 'block';
      btn.current.innerHTML = 'Read more';
      moreData.current.style.display = 'none';
      setIsDownIcon(true);
    } else {
      dots.current.style.display = 'none';
      btn.current.innerHTML = 'Read less';
      moreData.current.style.display = 'block';
      setIsDownIcon(false);
    }
  };

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'long',
    });
  };
  return (
    <div>
      <div className="flex justify-between flex-col flex-wrap text-white py-5 px-8  rounded-xl mt-3 bg-[#181818] border border-[#33353F]">
        <span className="flex">
          <h5 className="text-xl text-[#ADB7BE] font-semibold mb-2 mr-2">
            serial:{' '}
          </h5>
          <h5 className="text-xl font-bold mb-2">{serial}</h5>
        </span>
        <span className="flex pb-1">
          <p className="pr-1 text-[#ADB7BE]">status:</p>
          <p>{status}</p>
        </span>
        <div ref={dots}>...</div>
        <div ref={moreData} className="hidden">
          <span className=" py-1 flex">
            <p className="pr-1 text-[#ADB7BE]">type: </p>
            <p>{type}</p>
          </span>
          <p className="pt-1 text-[#ADB7BE]">launch date:</p>
          {date ? (
            <>
              <p className="pb-1text-[#ADB7BE]">
                {date.slice(8, 10)}. {getMonthName(date.slice(5, 7))}{' '}
                {date.slice(0, 4)}.
              </p>
            </>
          ) : (
            <p className="pb-1text-[#ADB7BE]">No date available</p>
          )}
          {missionName.length !== 0 && (
            <span className=" py-1 flex">
              <p className="pr-1 text-[#ADB7BE]">
                {missionName.length > 1 ? 'mission names:' : 'mission name:'}
              </p>
              <span className="flex flex-col">
                {missionName.map((name, index) => (
                  <span key={name + index} className="flex">
                    {' '}
                    <RocketLaunchIcon
                      className=" text-primary-500"
                      width={20}
                      height={20}
                    />{' '}
                    <p className="flex flex-col">{name}</p>
                  </span>
                ))}
              </span>
            </span>
          )}
        </div>
        <button className="mt-2" onClick={readMoreFunction}>
          <span className="flex text-primary-500 border rounded-lg  border-primary-200 border-opacity-10 px-1 pt-1">
            {isDownIcon ? (
              <ChevronDownIcon width={20} height={20} />
            ) : (
              <ChevronUpIcon width={20} height={20} />
            )}
            <p ref={btn} className="pl-1 transform -translate-y-1">
              Read more
            </p>
          </span>
        </button>
      </div>
    </div>
  );
}

export default DataCard;
