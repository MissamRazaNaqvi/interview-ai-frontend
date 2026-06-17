import useAuth from "../hook/useAuth";

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex justify-center items-center text-red-500">
        User not found
      </div>
    );
  }

  const currentUser = user?.loggenInUser || user;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              {currentUser?.username?.charAt(0).toUpperCase()}
            </div>

            <div className="absolute bottom-1 right-1 bg-black text-white p-2 rounded-full text-xs cursor-pointer">
              📷
            </div>
          </div>

          <h2 className="mt-3 text-xl font-semibold">
            {currentUser?.username}
          </h2>

          <p className="text-gray-500">{currentUser?.email}</p>
        </div>

        {/* Form Section */}
        <div className="border rounded-xl p-5">

          <h3 className="text-lg font-semibold mb-4">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* First Name */}
            <div>
              <label className="text-sm text-gray-600">First Name</label>
              <input
                type="text"
                value={currentUser?.username?.split(" ")[0] || ""}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                value={currentUser?.username?.split(" ")[1] || ""}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <div className="flex mt-1">
                <span className="px-3 py-2 border rounded-l-lg bg-gray-100">
                  +91
                </span>
                <input
                  type="text"
                  placeholder="123 456 7890"
                  className="w-full p-2 border border-l-0 rounded-r-lg focus:outline-blue-500"
                />
              </div>
            </div>

            {/* Timezone */}
            <div>
              <label className="text-sm text-gray-600">Timezone</label>
              <select className="w-full mt-1 p-2 border rounded-lg focus:outline-blue-500">
                <option>India (GMT +5:30)</option>
                <option>UTC (GMT +0)</option>
                <option>US (GMT -5)</option>
              </select>
            </div>

          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;