import useAuth from "../hook/useAuth";
import { Mail, User, Calendar, Shield, Edit } from "lucide-react";

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Loading Profile...
      </div>
    );
  }

  const currentUser = user?.data?.loggedUser;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">

        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">

              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-2xl sm:text-4xl font-bold text-white">
                  {currentUser?.username?.charAt(0)?.toUpperCase()}
                </div>

                <button className="absolute bottom-0 right-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Edit size={14} />
                </button>
              </div>

              {/* Info */}
              <div>
                <h1 className="text-xl sm:text-3xl font-bold text-white">
                  {currentUser?.username}
                </h1>

                <p className="text-slate-400 mt-1 text-sm sm:text-base">
                  {currentUser?.email}
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs sm:text-sm">
                    Active User
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs sm:text-sm">
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Stats (FLEX instead of GRID) */}
            <div className="flex flex-row sm:flex-row lg:flex-col gap-3 sm:gap-4 w-full lg:w-auto">

              <div className="flex-1 bg-slate-800 rounded-2xl p-3 sm:p-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">12</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Reports</p>
              </div>

              <div className="flex-1 bg-slate-800 rounded-2xl p-3 sm:p-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">8</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Analyses</p>
              </div>

            </div>
          </div>
        </div>

        {/* Info Section (Flex instead of Grid) */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">

          {/* Personal Info */}
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6">

            <h2 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">
              Personal Information
            </h2>

            <div className="flex flex-col gap-5">

              <div className="flex items-center gap-3 sm:gap-4">
                <User className="text-indigo-400" size={18} />
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm">Username</p>
                  <p className="text-white text-sm sm:text-base">
                    {currentUser?.username}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Mail className="text-indigo-400" size={18} />
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm">Email Address</p>
                  <p className="text-white text-sm sm:text-base">
                    {currentUser?.email}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Account Info */}
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6">

            <h2 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">
              Account Information
            </h2>

            <div className="flex flex-col gap-5">

              <div className="flex items-center gap-3 sm:gap-4">
                <Shield className="text-green-400" size={18} />
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm">Account Status</p>
                  <p className="text-white text-sm sm:text-base">Active</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Calendar className="text-purple-400" size={18} />
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm">Joined</p>
                  <p className="text-white text-sm sm:text-base">January 2026</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">

          <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition">
            Edit Profile
          </button>

          <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition">
            Change Password
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;