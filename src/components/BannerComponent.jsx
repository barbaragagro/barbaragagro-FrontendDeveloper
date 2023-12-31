import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import capsuleImage from '../images/capsule-image.png'

function BannerComponent() {
  return (
    <section id="home" className="lg:pt-32 lg:pb-48 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, this is official landing page for displaying capsules.
            </span>
            <br></br>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 sm:mr-16 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quaerat quas minima sed culpa repudiandae sit assumenda delectus
            esse reprehenderit nisi distinctio sint officia, nobis quidem neque.
            Modi, architecto hic.
          </p>
          <div>
            <Link
              activeClass="active"
              to={'search'}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:scale-110 duration-100 text-white"
            >
              Search
            </Link>
            <a
              href="https://www.spacex.com/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 hover:scale-110 duration-100 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Go to SpaceX
              </span>
            </a>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={capsuleImage}
              alt="capsuleimage"
              className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerComponent;
