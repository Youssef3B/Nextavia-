import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  return (
    <div className="py-12 px-4 sm:px-8 md:px-12 lg:px-32 xl:px-64 h-[80.5vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img
            className="w-full h-96 object-cover rounded-md"
            src="/images/airplan2.jpg"
            alt=""
          />
        </div>
        <div className="border p-4 rounded-md">
          <form>
            <h3 className="font-semibold text-lg">Login</h3>
            <div className="my-5">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                placeholder="user@email.com"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                required
              />
            </div>
            <div className="flex items-start mb-5 justify-end">
              <p className="text-blue-600 font-semibold cursor-pointer">
                Forget Password?
              </p>
            </div>
            <Button className="w-full py-2 hover:transition-all hover:bg-blue-700">
              Login
            </Button>
            <div className="h-[2px] bg-gray-200 my-4"></div>
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link to={"/register"}>
                <span className="text-blue-600 hover:text-blue-700">
                  Register
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
