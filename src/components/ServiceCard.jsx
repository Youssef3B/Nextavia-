import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function ServiceCard() {
  return (
    <div className="rounded-md bg-white my-12">
      <div className="relative">
        <img className="rounded-md" src="/images/airplan1.jpg" alt="" />
        <div className="absolute w-16 h-7 top-5 right-2 bg-gray-100 font-semibold flex justify-center items-center rounded-lg">
          250$
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-6 py-4 ">
          <div>
            <h4 className="font-bold text-lg">Paul Richard</h4>
            <p className="text-gray-500 italic">Pilot</p>
          </div>
          <div>
            <div className="flex items-center space-x-1 bg-yellow-400 text-white px-2 rounded-md">
              <FaStar />
              <span className="text-sm">4.5</span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <CiLocationOn />
            <p className="font-semibold">Rabat, Maroc</p>
          </div>
          <div>
            <span className="bg-green-200 text-green-500 text-sm px-2 font-semibold rounded-lg">
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
