import React from "react";

const Register = () => {
  return (
     <div className="flex min-h-screen">
        {/* Left Section - Image */}
        <div
          className="w-1/2 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/register.jpeg')" }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
        </div>

        {/* Right Section - Register Form */}
        <div className="w-1/2 flex items-center justify-center bg-gray-800 px-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Create an Account</h2>
            <form className="bg-emerald-400 p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border  bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border  bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border  bg-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
             
              <select
                placeholder="Role"
                className="w-full px-4 py-2 bg-emerald-300 border rounded mb-6"
              >
                <option value="investor">Investor</option>
                <option value="entrepreneur">Entrepreneur</option>
              </select>
              
              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

  );
};

export default Register;
