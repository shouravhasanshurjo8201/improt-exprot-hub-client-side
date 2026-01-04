// import { AuthContext } from '../../Context/AuthContext';
// import { useNavigate } from 'react-router';
// import { useContext, useEffect } from 'react';
// import "aos/dist/aos.css";
// import AOS from "aos";
// import useDynamicTitle from '../../Hooks/useDynamicTitle';
// import {
//   FaEdit,
//   FaEnvelope,
//   FaUserCircle,
//   FaIdBadge,
//   FaBriefcase,
//   FaPhoneAlt,
//   FaQuoteLeft,
//   FaUserShield
// } from 'react-icons/fa';

// const Profile = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   useDynamicTitle("User Profile");

//   // 🔐 Auth Guard
//   useEffect(() => {
//     if (!user) {
//       navigate("/login", { replace: true });
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   if (!user) return null;

//   // ✅ Role system (future DB ready)
//   const role = user?.role || "user"; // default user

//   const handleEditProfile = () => {
//     navigate("/updateProfile");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pb-20">

//       {/* ================= BANNER ================= */}
//       <div className="h-64 w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 relative">
//         <div className="absolute -bottom-20 left-0 right-0 flex justify-center">
//           <div data-aos="zoom-in" className="relative">
//             <img
//               src={user?.photoURL || 'https://i.ibb.co/vBR797F/default-avatar.png'}
//               alt="Profile"
//               className="h-36 w-36 md:h-44 md:w-44 rounded-full border-8 border-white dark:border-zinc-900 object-cover shadow-2xl"
//             />
//             <div className="absolute bottom-3 right-3 bg-emerald-500 p-2.5 rounded-full border-4 border-white dark:border-zinc-900 text-white shadow-lg">
//               <FaIdBadge size={20} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN ================= */}
//       <div className="pt-28 px-5 container mx-auto">
//         <div data-aos="fade-up" className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-[3rem] shadow-xl border border-gray-100 dark:border-zinc-800 p-8 md:p-14">

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-black text-zinc-800 dark:text-white mb-2">
//               {user?.displayName || "Unnamed User"}
//             </h1>

//             {/* Role Badge */}
//             <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest
//               ${role === "admin"
//                 ? "bg-red-100 text-red-600 dark:bg-red-900/30"
//                 : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30"
//               }`}
//             >
//               <FaUserShield />
//               {role}
//             </div>
//           </div>

//           {/* Info Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

//             {/* Role */}
//             <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
//               <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
//                 <FaBriefcase size={22} />
//               </div>
//               <div>
//                 <p className="text-[10px] text-gray-400 uppercase font-black">Account Type</p>
//                 <p className="text-lg font-bold capitalize text-zinc-700 dark:text-zinc-200">
//                   {role}
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
//               <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
//                 <FaEnvelope size={22} />
//               </div>
//               <div className="overflow-hidden">
//                 <p className="text-[10px] text-gray-400 uppercase font-black">Email</p>
//                 <p className="truncate font-bold text-zinc-700 dark:text-zinc-200">
//                   {user?.email}
//                 </p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
//               <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
//                 <FaPhoneAlt size={22} />
//               </div>
//               <div>
//                 <p className="text-[10px] text-gray-400 uppercase font-black">Phone</p>
//                 <p className="font-bold text-zinc-700 dark:text-zinc-200">
//                   {user?.phoneNumber || "Not added"}
//                 </p>
//               </div>
//             </div>

//             {/* Name */}
//             <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
//               <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
//                 <FaUserCircle size={22} />
//               </div>
//               <div>
//                 <p className="text-[10px] text-gray-400 uppercase font-black">Full Name</p>
//                 <p className="font-bold text-zinc-700 dark:text-zinc-200">
//                   {user?.displayName}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bio */}
//           <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-8 rounded-[2.5rem] mb-12 relative">
//             <FaQuoteLeft className="absolute -top-2 -left-2 text-emerald-500/10 text-8xl" />
//             <h3 className="text-sm font-black uppercase text-emerald-600 mb-3">Bio</h3>
//             <p className="italic text-zinc-600 dark:text-zinc-400">
//               {user?.bio || "No bio added yet."}
//             </p>
//           </div>

//           {/* Edit */}
//           <div className="flex justify-center">
//             <button
//               onClick={handleEditProfile}
//               className="flex items-center gap-3 px-12 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-[2rem]"
//             >
//               <FaEdit /> Update Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import {
  FaEdit,
  FaEnvelope,
  FaUserCircle,
  FaIdBadge,
  FaBriefcase,
  FaPhoneAlt,
  FaQuoteLeft,
  FaUserShield
} from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("user"); // ✅ default role
  const [loading, setLoading] = useState(true);

  useDynamicTitle("User Profile");

  // 🔐 Auth Guard
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  // 🎭 Fetch role from DB
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/role/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setRole(data?.role || "user");
          setLoading(false);
        })
        .catch(() => {
          setRole("user");
          setLoading(false);
        });
    }
  }, [user]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!user || loading) return null;

  const handleEditProfile = () => {
    navigate("/updateProfile");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pb-20">

      {/* ================= BANNER ================= */}
      <div className="h-64 w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 relative">
        <div className="absolute -bottom-20 left-0 right-0 flex justify-center">
          <div data-aos="zoom-in" className="relative">
            <img
              src={user?.photoURL || 'https://i.ibb.co/vBR797F/default-avatar.png'}
              alt="Profile"
              className="h-36 w-36 md:h-44 md:w-44 rounded-full border-8 border-white dark:border-zinc-900 object-cover shadow-2xl"
            />
            <div className="absolute bottom-3 right-3 bg-emerald-500 p-2.5 rounded-full border-4 border-white dark:border-zinc-900 text-white shadow-lg">
              <FaIdBadge size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="pt-28 px-5 container mx-auto">
        <div data-aos="fade-up" className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-[3rem] shadow-xl border border-gray-100 dark:border-zinc-800 p-8 md:p-14">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-zinc-800 dark:text-white mb-2">
              {user?.displayName || "Unnamed User"}
            </h1>

            {/* Role Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest
              ${role === "admin"
                ? "bg-red-100 text-red-600 dark:bg-red-900/30"
                : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30"
              }`}
            >
              <FaUserShield />
              {role}
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

            {/* Role */}
            <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
              <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
                <FaBriefcase size={22} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black">Account Type</p>
                <p className="text-lg font-bold capitalize text-zinc-700 dark:text-zinc-200">
                  {role}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
              <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
                <FaEnvelope size={22} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-gray-400 uppercase font-black">Email</p>
                <p className="truncate font-bold text-zinc-700 dark:text-zinc-200">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
              <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black">Phone</p>
                <p className="font-bold text-zinc-700 dark:text-zinc-200">
                  {user?.phoneNumber || "Not added"}
                </p>
              </div>
            </div>

            {/* Name */}
            <div className="flex items-center gap-5 p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-[2rem] border">
              <div className="bg-white dark:bg-zinc-700 p-4 rounded-2xl text-emerald-500">
                <FaUserCircle size={22} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black">Full Name</p>
                <p className="font-bold text-zinc-700 dark:text-zinc-200">
                  {user?.displayName}
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-8 rounded-[2.5rem] mb-12 relative">
            <FaQuoteLeft className="absolute -top-2 -left-2 text-emerald-500/10 text-8xl" />
            <h3 className="text-sm font-black uppercase text-emerald-600 mb-3">Bio</h3>
            <p className="italic text-zinc-600 dark:text-zinc-400">
              {user?.bio || "No bio added yet."}
            </p>
          </div>

          {/* Edit */}
          <div className="flex justify-center">
            <button
              onClick={handleEditProfile}
              className="flex items-center gap-3 px-12 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-[2rem]"
            >
              <FaEdit /> Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
