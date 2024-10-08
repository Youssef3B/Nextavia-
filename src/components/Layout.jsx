import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <section className=" min-h-screen relative ">
        <nav className="flex justify-between items-center py-6 bg-slate-100 px-64">
          <Link to={"/"}>
            <h2 className="font-bold text-xl text-blue-600">NEXTSTAVIA</h2>
          </Link>
          <ul className="flex space-x-8">
            <Link to={"/"}>
              <li className="font-semibold cursor-pointer hover:text-blue-400 transition-all">
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
              <button className="bg-blue-600 px-3 py-1 border rounded-md text-sm font-semibold border-blue-600 text-white hover:border-white hover:bg-white hover:text-black transition-all ">
                Login
              </button>
            </Link>
          </div>
        </nav>
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
export default Layout;
