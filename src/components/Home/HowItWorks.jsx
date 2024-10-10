import { FaSearchLocation } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="mx-4 md:mx-16 lg:mx-64 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="hidden md:block">
          <img src="/images/about.png" alt="" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-lg md:text-xl text-blue-600 font-semibold mb-3">
            How it Works
          </h4>
          <h2 className="font-bold text-2xl md:text-4xl mb-5">
            4 easy steps to get your solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 my-4 mt-12">
            {Array(4)
              .fill()
              .map((_, index) => (
                <motion.div
                  key={index}
                  className="flex space-x-6"
                  variants={stepVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div>
                    <FaSearchLocation
                      size={48}
                      className="text-blue-700 bg-sky-100 w-16 h-16 p-3 rounded-lg flex justify-center items-center"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Search Doctor</h5>
                    <p className="text-sm font-medium text-gray-600">
                      Search for a doctor based on specialization, location, or
                      availability.
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
