import Button from "../Button";
import { FaLocationDot } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="grid grid-cols-2 gap-10 my-40">
      <div>
        <h1 className="font-bold text-5xl mb-6">
          Consult <span className="text-sky-500">Best Doctors</span> Your <br />{" "}
          Nearby Location.
        </h1>
        <h4 className="mb-6 text-lg font-semibold">
          Embark on your healing journey with Doccure
        </h4>
        <Button className="px-8 py-4">Start a Consult</Button>

        <div className="bg-white my-8 px-8 py-6 rounded-lg">
          <form className="flex space-x-3">
            <div>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
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
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search Mockups, Logos..."
                  required=""
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaLocationDot />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search Mockups, Logos..."
                  required=""
                />
              </div>
            </div>
            <div></div>
            <Button className="px-8 py-1 hover:bg-blue-700 transition-all">
              Search
            </Button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default HeroSection;
