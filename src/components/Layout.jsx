import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <section className="min-h-screen relative">
        <nav className="flex justify-between items-center py-6 bg-slate-100 px-4 md:px-64">
          <Link to={"/"}>
            <h2 className="font-bold text-xl text-blue-600">NEXTSTAVIA</h2>
          </Link>
          {/* Toggle button for mobile */}
          <button className="md:hidden focus:outline-none" onClick={toggleNav}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
          <ul
            className={`absolute md:static bg-slate-100 w-full md:w-auto md:flex md:space-x-8 transition-all duration-300 ease-in-out ${
              isNavOpen ? "top-16 left-0" : "top-[-200px] md:top-0"
            }`}
          >
            <li className="md:hidden py-2">
              <Link
                to={"/"}
                className="font-semibold cursor-pointer hover:text-blue-400 transition-all"
              >
                Home
              </Link>
            </li>
            <Link to={"/"}>
              <li className="font-semibold cursor-pointer hover:text-blue-400 transition-all md:block hidden">
                Home
              </li>
            </Link>
            <li className="font-semibold cursor-pointer hover:text-blue-500 transition-all">
              Doctors
            </li>
            <li className="font-semibold cursor-pointer hover:text-blue-500 transition-all">
              Patients
            </li>
            <li className="font-semibold cursor-pointer hover:text-blue-500 transition-all">
              Pharmacy
            </li>
            <li className="font-semibold cursor-pointer hover:text-blue-500 transition-all">
              Page
            </li>
            <li className="font-semibold cursor-pointer hover:text-blue-500 transition-all">
              Admin
            </li>
          </ul>
          <div className="flex space-x-3">
            <Link to={"register"}>
              <button className="bg-white px-3 py-1 border rounded-md text-sm font-semibold hover:bg-blue-500 hover:border hover:border-blue-500 hover:text-white transition-all">
                Register
              </button>
            </Link>
            <Link to={"login"}>
              <button className="bg-blue-600 px-3 py-1 border rounded-md text-sm font-semibold border-blue-600 text-white hover:border-white hover:bg-white hover:text-black transition-all">
                Login
              </button>
            </Link>
          </div>
        </nav>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Layout;
