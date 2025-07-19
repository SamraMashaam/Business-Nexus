import SidebarInvestor from "../components/SidebarInvestor";

const ProfileInvestor = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarInvestor />

      <div className="flex-grow p-8 bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-emerald-300">Investor Profile</h1>

        <div className="bg-emerald-200 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Name</h2>
            <p className="text-gray-700">Ayesha Khan</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Email</h2>
            <p className="text-gray-700">ayesha.khan@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Organization</h2>
            <p className="text-gray-700">GreenEdge Ventures</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Investment Range</h2>
            <p className="text-gray-700">$20,000 - $200,000</p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Investment Interests</h2>
            <p className="text-gray-700">CleanTech, AI/ML Startups, Social Enterprises</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInvestor;
