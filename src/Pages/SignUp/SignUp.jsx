

import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../../Firebase/Firebase.config";
import { toast } from "react-hot-toast";
import { useContext, useState, useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Context/AuthContext";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import { useForm } from "react-hook-form";
import {
    FaGoogle,
    FaEye,
    FaEyeSlash,
    FaUser,
    FaImage,
    FaEnvelope,
} from "react-icons/fa";

const SignUp = () => {
    const { user, setUser } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useDynamicTitle("Create Account");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    const onSubmit = async (data) => {
        const { Name, Email, Photo, Password } = data;

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                Email,
                Password
            );

            await updateProfile(res.user, {
                displayName: Name,
                photoURL: Photo,
            });

            //   const dbRes = await fetch("http://localhost:3000/users", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //       name: Name,
            //       email: Email,
            //       photoURL: Photo,
            //       role: "user",
            //     }),
            //   });

            //   const savedUser = await dbRes.json();

            setUser({
                ...res.user,
                // role: savedUser.role || "user",
                 role:  "user",
            });

            toast.success("Account created successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email already in use!");
            } else {
                toast.error(error.message);
            }
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const res = await signInWithPopup(auth, provider);

              const dbRes = await fetch("https://improt-exprot-hub-server-side.vercel.app/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: res.user.displayName,
                  email: res.user.email,
                  photoURL: res.user.photoURL,
                  role: "user",
                }),
              });

              const savedUser = await dbRes.json();

            setUser({
                ...res.user,
                role: savedUser.role || "user",
                 role:  "user",
            });

            toast.success("Signed up with Google!");
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-4">
            <div
                data-aos="zoom-in"
                className="custom-card w-full max-w-md p-5 shadow-lg rounded-2xl border border-emerald-400"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black gradient-text">
                        Create Your Account
                    </h1>
                    <p className="text-gray-500 text-sm mt-2">
                        Join as a user — admin access can be granted later
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="label-text font-semibold">Full Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-4 text-emerald-500" />
                            <input
                                type="text"
                                className="input input-bordered w-full pl-10"
                                placeholder="Enter your name"
                                {...register("Name", { required: "Name is required" })}
                            />
                        </div>
                        {errors.Name && (
                            <p className="text-red-500 text-xs">{errors.Name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label-text font-semibold">Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-4 text-emerald-500" />
                            <input
                                type="email"
                                className="input input-bordered w-full pl-10"
                                placeholder="Enter your email"
                                {...register("Email", {
                                    required: "Email is required",
                                })}
                            />
                        </div>
                        {errors.Email && (
                            <p className="text-red-500 text-xs">{errors.Email.message}</p>
                        )}
                    </div>

                    {/* Photo */}
                    <div>
                        <label className="label-text font-semibold">Photo URL</label>
                        <div className="relative">
                            <FaImage className="absolute left-3 top-4 text-emerald-500" />
                            <input
                                type="url"
                                className="input input-bordered w-full pl-10"
                                placeholder="https://photo.url"
                                {...register("Photo", { required: "Photo URL is required" })}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label-text font-semibold">Password</label>
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"}
                                className="input input-bordered w-full pr-10"
                                placeholder="••••••••"
                                {...register("Password", {
                                    required: "Password required",
                                    minLength: { value: 6, message: "Minimum 6 characters" },
                                })}
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                            >
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <button className="btn-primary w-full">
                        Create Account
                    </button>
                </form>

                <div className="divider my-6">OR</div>

                <button
                    onClick={handleGoogleSignup}
                    className="btn btn-outline w-full flex items-center gap-3 rounded-xl"
                >
                    <FaGoogle className="text-emerald-500" />
                    Continue with Google
                </button>

                <p className="text-center mt-6 text-sm">
                    Already have an account?
                    <Link
                        to="/login"
                        className="text-emerald-600 font-bold ml-2"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
