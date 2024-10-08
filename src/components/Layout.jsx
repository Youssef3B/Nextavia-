import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <section className="bg-slate-100 min-h-screen  px-64">
        <nav className="flex justify-between items-center py-6">
          <h2 className="font-bold text-xl text-sky-600">NEXTSTAVIA</h2>
          <ul className="flex space-x-8">
            <li className="font-semibold cursor-pointer hover:text-sky-400 transition-all">
              Home
            </li>
            <li className="font-semibold cursor-pointer hover:text-sky-500 transition-all">
              Doctors
            </li>
            <li className="font-semibold cursor-pointer hover:text-sky-500 transition-all">
              Patients
            </li>
            <li className="font-semibold cursor-pointer hover:text-sky-500 transition-all">
              Pharmacy
            </li>
            <li className="font-semibold cursor-pointer hover:text-sky-500 transition-all">
              Page
            </li>
            <li className="font-semibold cursor-pointer hover:text-sky-500 transition-all">
              Admin
            </li>
          </ul>
          <div className="flex space-x-3">
            <button className="bg-white px-3 py-1 border rounded-md text-sm font-semibold hover:bg-sky-500 hover:border hover:border-sky-500 hover:text-white transition-all">
              Register
            </button>
            <button className="bg-sky-500 px-3 py-1 border rounded-md text-sm font-semibold border-sky-500 text-white hover:border-white hover:bg-white hover:text-black transition-all ">
              Login
            </button>
          </div>
        </nav>
        <Outlet />
      </section>
    </>
  );
}
export default Layout;
