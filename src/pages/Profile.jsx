import useAuth from "../hook/useAuth";
import {
  Mail,
  User,
  Calendar,
  Shield,
  Edit,
} from "lucide-react";

const Profile = () => {
  const { user, loading } = useAuth();


  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Loading Profile...
      </div>
    );
  }

  const currentUser = user?.data?.loggedUser ;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="flex flex-col sm:flex-row items-center gap-6">

              {/* Avatar */}
              <div className="relative">

                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                  {currentUser?.username?.charAt(0)?.toUpperCase()}
                </div>

                <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Edit size={16} />
                </button>

              </div>

              <div>

                <h1 className="text-3xl font-bold text-white">
                  {currentUser?.username}
                </h1>

                <p className="text-slate-400 mt-1">
                  {currentUser?.email}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                    Active User
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                    Verified
                  </span>

                </div>

              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold text-white">
                  12
                </h3>
                <p className="text-slate-400 text-sm">
                  Reports
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold text-white">
                  8
                </h3>
                <p className="text-slate-400 text-sm">
                  Analyses
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Information Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          {/* Personal Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
              Personal Information
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <User className="text-indigo-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">
                    Username
                  </p>
                  <p className="text-white">
                    {currentUser?.username}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-indigo-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">
                    Email Address
                  </p>
                  <p className="text-white">
                    {currentUser?.email}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Account Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
              Account Information
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <Shield className="text-green-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">
                    Account Status
                  </p>
                  <p className="text-white">
                    Active
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-purple-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">
                    Joined
                  </p>
                  <p className="text-white">
                    January 2026
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition">
            Edit Profile
          </button>

          <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition">
            Change Password
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;