import React, { useEffect, useRef, useState, useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import DataCard from './DataCard';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import Pagination from '../../Pagination';

function DataGridComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage] = useState(10);

  const { searchInput, statusFilter, launchFilter, typeFilter } =
    useContext(SearchContext);

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios('https://api.spacexdata.com/v3/capsules');
      const data = response.data;
      setCapsules(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredCapsules = capsules.filter(
    (capsule) =>
      capsule.capsule_serial.includes(searchInput.toUpperCase()) &&
      capsule.status.includes(statusFilter) &&
      capsule.type.includes(typeFilter) &&
      (launchFilter
        ? capsule.original_launch &&
          launchFilter.includes(capsule.original_launch.slice(0, 4))
        : capsule)
  );

  const indexofLastCapsule = currentPage * capsulesPerPage;
  const indexofFirstCapsule = indexofLastCapsule - capsulesPerPage;
  const currentCapsules = filteredCapsules.slice(
    indexofFirstCapsule,
    indexofLastCapsule
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ul ref={ref} className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-12 place-items-center">
            {currentCapsules.map((capsule, index) => (
              <motion.li
                key={capsule.capsule_serial}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <DataCard
                  key={capsule.capsule_serial}
                  serial={capsule.capsule_serial}
                  status={capsule.status}
                  imgUrl={capsule.image}
                  type={capsule.type}
                  date={capsule.original_launch}
                />
              </motion.li>
            ))}
            {filteredCapsules.length === 0 && (
              <h1 className=" text-white">No capsules found!</h1>
            )}
          </ul>
          <Pagination
            capsulesPerPage={capsulesPerPage}
            totalCapsules={filteredCapsules.length}
            paginate={paginate}
          />
        </>
      )}
    </section>
  );
}

export default DataGridComponent;
