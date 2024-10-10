import { IoAirplane } from "react-icons/io5";
import { motion } from "framer-motion";

function Advantages() {
  return (
    <div className="bg-white px-6 lg:px-32 xl:px-64 py-8 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        <Advantage />
        <Advantage />
        <Advantage />
        <Advantage />
        <Advantage />
        <Advantage />
        <Advantage />
      </div>
    </div>
  );
}

function Advantage() {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="border shadow-sm p-4 lg:p-6 flex flex-col justify-center items-center rounded-md"
      initial="hidden"
      whileInView="visible" // Trigger animation when in view
      viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% of the component is in view
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-blue-100 p-4 rounded-full">
        <IoAirplane size={22} className="text-blue-600" />
      </div>
      <h3 className="font-semibold text-lg lg:text-lg my-4 text-center">
        Lorem, ipsum dolor.
      </h3>
    </motion.div>
  );
}

export default Advantages;
