
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../../Firebase/Firebase.config";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const { user, setUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useDynamicTitle("Login");

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const currentEmail = watch("Email");

    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    const onSubmit = async (data) => {
        const { Email, Password } = data;

        try {
            const res = await signInWithEmailAndPassword(auth, Email, Password);
            const userEmail = res.user?.email;

            const dbRes = await fetch(
                `https://improt-exprot-hub-server-side.vercel.app/users/${userEmail}`
            );
            let dbUser = {};

            if (dbRes.ok) {
                const text = await dbRes.text(); 
                dbUser = text ? JSON.parse(text) : {}; 
            }


            console.log(dbUser);

            console.log("Database User Info:", dbUser);

            const loggedUser = {
                ...res.user,
                role: dbUser?.role || "user",
                jobTitle: dbUser?.jobTitle || "",
                bio: dbUser?.bio || "",
                phoneNumber: dbUser?.phoneNumber || ""
            };

            setUser(loggedUser);
            toast.success(`Welcome Back, ${dbUser?.name || "User"}!`);

            if (loggedUser.role === "admin") {
                navigate("/admin/dashboard", { replace: true });
            } else {
                navigate(from, { replace: true });
            }

        } catch (e) {
            console.error("Login Error:", e);
            if (e.code === "auth/user-not-found" || e.code === "auth/invalid-credential") {
                toast.error("Invalid email or password!");
            } else if (e.code === "auth/wrong-password") {
                toast.error("Wrong password!");
            } else {
                toast.error(e.message || "Something went wrong!");
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const res = await signInWithPopup(auth, provider);

            const response = await fetch("https://improt-exprot-hub-server-side.vercel.app/login-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: res.user.displayName,
                    email: res.user.email,
                    photoURL: res.user.photoURL,
                    role: "user",
                }),
            });

            const loginResult = await response.json();

            const dbRes = await fetch(
                `https://improt-exprot-hub-server-side.vercel.app/users/${res.user.email}`
            );
            const dbUser = await dbRes.json();

            setUser({
                ...res.user,
                role: dbUser?.role || "user",
                jobTitle: dbUser?.jobTitle || "",
                bio: dbUser?.bio || "",
                phoneNumber: dbUser?.phoneNumber || "",
            });

            toast.success("Login successful with Google!");
            navigate(from, { replace: true });
        } catch (e) {
            console.error(e);
            toast.error(e.message);
        }
    };

    const handleForgetPassword = () => {
        navigate("/forgetPassword", {
            state: { email: currentEmail },
        });
    };

    const handleDemoUser = () => {
        setValue("Email", "demouser@example.com");
        setValue("Password", "Demo1234");
        toast.success("Demo user credentials filled!");
    };

    const handleDemoAdmin = () => {
        setValue("Email", "admin@example.com");
        setValue("Password", "Admin1234");
        toast.success("Admin credentials filled!");
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-5">
            <div className="custom-card w-full max-w-md p-5 shadow-lg rounded-2xl border border-emerald-400">
                <h1 className="text-3xl font-black text-center mb-8 gradient-text">
                    Login Now
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="label-text font-semibold">Email Address</label>
                        <input
                            type="email"
                            className={`input input-bordered w-full ${errors.Email && "border-red-500"
                                }`}
                            placeholder="Enter your email"
                            {...register("Email", { required: "Email is required" })}
                        />
                        {errors.Email && (
                            <p className="text-red-500 text-xs">{errors.Email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label-text font-semibold">Password</label>
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"}
                                className={`input input-bordered w-full ${errors.Password && "border-red-500"
                                    }`}
                                placeholder="••••••••"
                                {...register("Password", { required: "Password is required" })}
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                            >
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.Password && (
                            <p className="text-red-500 text-xs">{errors.Password.message}</p>
                        )}

                        <button
                            type="button"
                            onClick={handleForgetPassword}
                            className="text-sm text-emerald-600 mt-2"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button className="btn-primary w-full">Login to Account</button>
                </form>

                <div className="flex justify-between my-4 gap-2">
                    <button onClick={handleDemoUser} className="btn-secondary">
                        Demo User
                    </button>
                    <button onClick={handleDemoAdmin} className="btn-secondary">
                        Demo Admin
                    </button>
                </div>

                <div className="divider my-2">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full flex items-center gap-3 rounded-xl"
                >
                    <FaGoogle className="text-emerald-500" />
                    Continue with Google
                </button>

                <p className="text-center mt-8 text-gray-600">
                    New here?
                    <Link to="/signup" className="font-bold text-emerald-600 ml-2">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
