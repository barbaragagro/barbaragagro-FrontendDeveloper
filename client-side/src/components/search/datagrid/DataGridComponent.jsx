import React, { useEffect, useRef, useState, useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import DataCard from './DataCard';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';

function DataGridComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [capsules, setCapsules] = useState([]);
  const { searchInput, statusFilter, launchFilter, typeFilter } =
    useContext(SearchContext);

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, duration: 1 },
  };

  const fetchData = async () => {
    try {
      const response = await axios('https://api.spacexdata.com/v3/capsules');
      const data = response.data;
      console.log(data);
      setCapsules(data);
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

  return (
    <section>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredCapsules.map((capsule, index) => (
          <motion.li
            key={capsule.capsule_serial}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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
    </section>
  );
}

export default DataGridComponent;
