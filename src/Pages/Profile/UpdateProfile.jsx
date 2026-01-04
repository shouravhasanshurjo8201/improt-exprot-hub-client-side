// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../../Context/AuthContext";
// import { updateProfile } from "firebase/auth";
// import { auth } from "../../Firebase/Firebase.config";
// import toast from "react-hot-toast";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import useDynamicTitle from "../../Hooks/useDynamicTitle";
// import { useForm } from "react-hook-form";
// import {
//   FaUserEdit,
//   FaLink,
//   FaSave,
//   FaArrowLeft,
//   FaPhone,
//   FaBriefcase,
//   FaQuoteLeft
// } from "react-icons/fa";

// const UpdateProfile = () => {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(AuthContext);
//   useDynamicTitle("Update Profile");

//   // 🔐 Auth Guard
//   useEffect(() => {
//     if (!user) navigate("/login", { replace: true });
//   }, [user, navigate]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       displayName: user?.displayName || "",
//       photoURL: user?.photoURL || "",
//       phoneNumber: user?.phoneNumber || "",
//       jobTitle: user?.jobTitle || "",
//       bio: user?.bio || "",
//     },
//   });

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const onUpdate = async (data) => {
//     const { displayName, photoURL, phoneNumber, jobTitle, bio } = data;

//     try {
//       // ✅ Firebase supported fields
//       await updateProfile(auth.currentUser, { displayName, photoURL });

//       // ✅ Context update (DB-ready)
//       setUser({
//         ...auth.currentUser,
//         displayName,
//         photoURL,
//         phoneNumber,
//         jobTitle,
//         bio,
//         role: user?.role || "user", // default role
//       });

//       toast.success("Profile updated successfully!");
//       navigate("/profile");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   if (!user) return null;

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-slate-50 dark:bg-zinc-950">
//       <div data-aos="zoom-in" className="w-full max-w-2xl">

//         {/* Back */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-emerald-600 font-bold mb-6 hover:translate-x-1 transition"
//         >
//           <FaArrowLeft /> Go Back
//         </button>

//         <div className="bg-white dark:bg-zinc-900 rounded-[3rem] shadow-2xl p-8 md:p-12 border dark:border-zinc-800">

//           {/* Header */}
//           <div className="text-center mb-10">
//             <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-3xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
//               <FaUserEdit size={40} />
//             </div>
//             <h1 className="text-3xl font-black text-zinc-800 dark:text-white">
//               Update Your <span className="text-emerald-500">Profile</span>
//             </h1>
//             <p className="text-sm text-gray-500 mt-2">
//               Keep your information fresh & accurate
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit(onUpdate)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             {/* Name */}
//             <div>
//               <label className="font-bold text-sm">Full Name</label>
//               <input
//                 className="input input-bordered w-full mt-2"
//                 {...register("displayName", { required: "Name is required" })}
//               />
//               {errors.displayName && <p className="text-red-500 text-xs">{errors.displayName.message}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="font-bold text-sm">Phone</label>
//               <div className="relative mt-2">
//                 <FaPhone className="absolute left-3 top-4 text-gray-400" />
//                 <input
//                   className="input input-bordered w-full pl-10"
//                   placeholder="+880 1XXX-XXXXXX"
//                   {...register("phoneNumber")}
//                 />
//               </div>
//             </div>

//             {/* Photo */}
//             <div className="md:col-span-2">
//               <label className="font-bold text-sm">Photo URL</label>
//               <div className="relative mt-2">
//                 <FaLink className="absolute left-3 top-4 text-gray-400" />
//                 <input
//                   className="input input-bordered w-full pl-10"
//                   {...register("photoURL", { required: "Photo URL required" })}
//                 />
//               </div>
//             </div>

//             {/* Job */}
//             <div className="md:col-span-2">
//               <label className="font-bold text-sm">Job Title</label>
//               <div className="relative mt-2">
//                 <FaBriefcase className="absolute left-3 top-4 text-gray-400" />
//                 <input
//                   className="input input-bordered w-full pl-10"
//                   placeholder="e.g. Senior Exporter"
//                   {...register("jobTitle")}
//                 />
//               </div>
//             </div>

//             {/* Bio */}
//             <div className="md:col-span-2">
//               <label className="font-bold text-sm">Short Bio</label>
//               <div className="relative mt-2">
//                 <FaQuoteLeft className="absolute left-3 top-4 text-gray-400" />
//                 <textarea
//                   className="textarea textarea-bordered w-full pl-10 h-24"
//                   {...register("bio")}
//                 />
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="md:col-span-2 mt-4">
//               <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white w-full py-4 rounded-2xl font-bold flex gap-2 justify-center">
//                 <FaSave /> Save Profile
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;


import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import { useForm } from "react-hook-form";
import {
  FaUserEdit,
  FaLink,
  FaSave,
  FaArrowLeft,
  FaPhone,
  FaBriefcase,
  FaQuoteLeft
} from "react-icons/fa";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  useDynamicTitle("Update Profile");

  // 🔐 Auth Guard
  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
      phoneNumber: user?.phoneNumber || "",
      jobTitle: user?.jobTitle || "",
      bio: user?.bio || "",
    },
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const onUpdate = async (data) => {
    const { displayName, photoURL, phoneNumber, jobTitle, bio } = data;

    try {
      // ✅ 1. Firebase update
      await updateProfile(auth.currentUser, { displayName, photoURL });

      // ✅ 2. MongoDB update
      const dbRes = await fetch(
        `http://localhost:3000/users/profile/${user.email}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, jobTitle, bio }),
        }
      );

      if (!dbRes.ok) {
        throw new Error("Database update failed");
      }

      // ✅ 3. Context sync
      setUser({
        ...auth.currentUser,
        displayName,
        photoURL,
        phoneNumber,
        jobTitle,
        bio,
        role: user?.role || "user",
      });

      toast.success("Profile updated successfully!");
      reset();
      navigate("/profile");

    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-slate-50 dark:bg-zinc-950">
      <div data-aos="zoom-in" className="w-full max-w-2xl">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-emerald-600 font-bold mb-6 hover:translate-x-1 transition"
        >
          <FaArrowLeft /> Go Back
        </button>

        <div className="bg-white dark:bg-zinc-900 rounded-[3rem] shadow-2xl p-8 md:p-12 border dark:border-zinc-800">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-3xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
              <FaUserEdit size={40} />
            </div>
            <h1 className="text-3xl font-black text-zinc-800 dark:text-white">
              Update Your <span className="text-emerald-500">Profile</span>
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Keep your information fresh & accurate
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onUpdate)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="font-bold text-sm">Full Name</label>
              <input
                className="input input-bordered w-full mt-2"
                {...register("displayName", { required: "Name is required" })}
              />
              {errors.displayName && (
                <p className="text-red-500 text-xs">{errors.displayName.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="font-bold text-sm">Phone</label>
              <div className="relative mt-2">
                <FaPhone className="absolute left-3 top-4 text-gray-400" />
                <input
                  className="input input-bordered w-full pl-10"
                  {...register("phoneNumber")}
                />
              </div>
            </div>

            {/* Photo */}
            <div className="md:col-span-2">
              <label className="font-bold text-sm">Photo URL</label>
              <div className="relative mt-2">
                <FaLink className="absolute left-3 top-4 text-gray-400" />
                <input
                  className="input input-bordered w-full pl-10"
                  {...register("photoURL", { required: "Photo URL required" })}
                />
              </div>
            </div>

            {/* Job */}
            <div className="md:col-span-2">
              <label className="font-bold text-sm">Job Title</label>
              <div className="relative mt-2">
                <FaBriefcase className="absolute left-3 top-4 text-gray-400" />
                <input
                  className="input input-bordered w-full pl-10"
                  {...register("jobTitle")}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="font-bold text-sm">Short Bio</label>
              <div className="relative mt-2">
                <FaQuoteLeft className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  className="textarea textarea-bordered w-full pl-10 h-24"
                  {...register("bio")}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-4">
              <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white w-full py-4 rounded-2xl font-bold flex gap-2 justify-center">
                <FaSave /> Save Profile
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
