import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Register() {
  const [step, setStep] = useState(1);
  const [organization, setOrganization] = useState({
    orgName: "",
    regRef: "",
    contactPhone: "",
    contactAddress: "",
  });
  const [adminDetails, setAdminDetails] = useState({
    adminName: "",
    email: "",
    password: "",
  });
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleOrgChange = (e) => {
    const { name, value } = e.target;
    setOrganization({
      ...organization,
      [name]: value,
    });
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: value,
    });
  };

  useEffect(() => {
    const { orgName, regRef, contactPhone, contactAddress } = organization;
    const isValid =
      orgName !== "" &&
      regRef !== "" &&
      contactPhone !== "" &&
      contactAddress !== "";
    setIsFormValid(isValid);
  }, [organization]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2) {
      console.log("Organization Details: ", organization);
      console.log("Admin Details: ", adminDetails);
    }
  };

  const handleGeolocation = () => {
    setLoadingLocation(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Lat: ", latitude, "Long: ", longitude);

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          console.log("Location Data: ", data);

          setOrganization({
            ...organization,
            contactAddress: data.display_name,
          });
        } catch (error) {
          console.error("Error fetching address: ", error);
        } finally {
          setLoadingLocation(false);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-8 md:px-12 lg:px-32 xl:px-64 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img
            className="w-full h-96 object-cover rounded-md"
            src="/images/airplan2.jpg"
            alt=""
          />
        </div>
        <div className="border p-4 rounded-md">
          <form onSubmit={handleSubmit}>
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }} // Start below and transparent
              animate={{ opacity: 1, y: 0 }} // End at original position
              exit={{ opacity: 0, y: 20 }} // Exit with animation
              transition={{ duration: 0.3 }} // Transition duration
            >
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Organization Information
                  </h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="orgName"
                      value={organization.orgName}
                      onChange={handleOrgChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter organization name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Registration Reference
                    </label>
                    <input
                      type="text"
                      name="regRef"
                      value={organization.regRef}
                      onChange={handleOrgChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter registration reference"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      name="contactPhone"
                      value={organization.contactPhone}
                      onChange={handleOrgChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter contact phone"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Address (Geo-localization)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="contactAddress"
                        value={organization.contactAddress}
                        onChange={handleOrgChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter address or get current location"
                        required
                      />
                      <button
                        type="button"
                        onClick={handleGeolocation}
                        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md"
                        disabled={loadingLocation}
                      >
                        {loadingLocation ? "Locating..." : "Get Location"}
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                      !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!isFormValid}
                  >
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Admin/User Details</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Admin Name
                    </label>
                    <input
                      type="text"
                      name="adminName"
                      value={adminDetails.adminName}
                      onChange={handleAdminChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter admin name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={adminDetails.email}
                      onChange={handleAdminChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={adminDetails.password}
                      onChange={handleAdminChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Register
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
