import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HeroSection() {
  const [startDate, setStartDate] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 items-center lg:grid-cols-2 gap-10 py-20 lg:py-10 bg-slate-100 px-8 lg:px-32 xl:px-64"
    >
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl mb-4 lg:mb-6">
          Consult <span className="text-blue-500">Best Doctors</span> Your{" "}
          <br className="hidden lg:block" /> Nearby Location.
        </h1>
        <h4 className="mb-4 lg:mb-6 text-base lg:text-lg font-semibold">
          Embark on your healing journey with Doccure
        </h4>
        <Button className="px-6 py-3 lg:px-8 lg:py-4 text-white">
          Start a Consult
        </Button>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="bg-white my-8 py-6 rounded-lg"
        >
          <form className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
            {/* Search Input */}
            <div className="w-full lg:w-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Doctors, Services..."
                  required=""
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="w-full lg:w-auto">
              <label
                htmlFor="location-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLocationDot />
                </div>
                <input
                  type="search"
                  id="location-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search by Location"
                  required=""
                />
              </div>
            </div>

            {/* Date Picker */}
            <div className="w-full lg:w-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Select Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholderText="Select a date"
              />
            </div>

            <Button className="px-6 lg:px-8 py-2 lg:py-1 hover:bg-blue-700 text-white transition-all">
              Search
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Image with animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        className="hidden lg:block"
      >
        <img src="/images/herosection.png" alt="Doctor Consultation" />
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
