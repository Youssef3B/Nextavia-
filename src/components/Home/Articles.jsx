import { FaRegUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Button from "../Button";

function Articles() {
  return (
    <div className="mx-4 md:mx-16 lg:mx-64 my-8">
      <h2 className="text-center font-bold text-2xl md:text-4xl">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border shadow-sm p-6 rounded-md">
      <div className="col-span-1">
        <img
          className="rounded-md h-full object-cover"
          src="/images/airplan3.webp"
          alt=""
        />
      </div>
      <div className="col-span-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div>
              <FaRegUser size={14} />
            </div>
            <p className="text-sm font-normal text-gray-500">Jhon Doe</p>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <CiCalendar />
            </div>
            <p className="text-sm text-gray-500 font-normal">13 Aug, 2023</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mt-1 mb-2">
            Navigating Telehealth: A Guide to Virtual Healthcare Visits
          </h3>
          <p className="text-gray-500">
            Explore the benefits & challenges of virtual healthcare
            appointments, along with tips for...
          </p>
          <Button className="bg-transparent border border-blue-600 text-blue-600 text-sm px-3 py-2 mt-8">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
