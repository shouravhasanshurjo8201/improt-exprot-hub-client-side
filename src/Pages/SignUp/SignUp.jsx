import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router'
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-hot-toast';
import { useContext, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from '../../Context/AuthContext';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const SignUp = () => {
    const { user, setUser } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const userLocation = useLocation();
    const [show, setShow] = useState(false)
    const location = userLocation.state || "/";
    const navigate = useNavigate();
    useDynamicTitle("SignUp");
    const handleSignup = (e) => {
        e.preventDefault();
        const displayName = e.target.Name?.value;
        const photoURL = e.target.Photo?.value;
        const Email = e.target.Email?.value;
        const Password = e.target.Password?.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            toast.error("Please enter a valid email address!");
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(Password)) {
            toast.error("Password must be at least 6 characters and contain both uppercase and lowercase letters");
            return;
        }
        createUserWithEmailAndPassword(auth, Email, Password)
        .then((res) => {
            updateProfile(res.user, { displayName, photoURL })
            .then(() => {
                toast.success("Signed Up Successful");
                navigate(location, { replace: true });
            })
            .catch((e) => {
                toast.error(e.message)
            })
        })
        .catch((e) => {
            toast.error(e.message)
        })
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((res) => {
            setUser(res.user);
            toast.success("Login Successful");
            navigate(location, { replace: true });
        })
        .catch((e) => {
            toast.error(e.message)
        })
    }
    const [email, setEmail] = useState("");
    const handleForgetPassword = () => {
        navigate("/forgetPassword", { state: { email } });
    }
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className='flex flex-col justify-center items-center flex-1 min-h-scree'>
            <div data-aos="fade-up" className='container mx-auto '>
                <div className='flex flex-col justify-center items-center p-5' >
                    <fieldset className="fieldset bg-background1 border-base-200 rounded-box w-xs border p-4 text-white">
                        {user ? '' : <h1 className='text-center font-bold text-emerald-800 text-2xl'>Sign Up</h1>}
                        <form onSubmit={handleSignup}>
                            <input type="text" name='Name' className="input bg-white text-sm text-black my-5" placeholder="Enter Name " />
                            <input type="email" name='Email' onChange={(e) => setEmail(e.target.value)}
                                className="input bg-white text-sm text-black" placeholder="Enter Email Address" />
                            <input type="text" name='Photo' className="input bg-white text-sm text-black my-5" placeholder="Enter Photo url" />
                            <div className='flex justify-between items-center relative'>
                                <input type={show ? "password" : "text"} name='Password' className="input bg-white text-sm text-black" placeholder={show ? "••••••••" : "Enter Password "} /><span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3  cursor-pointer text-lg">
                                    {show ? "👁️" : "👀"}
                                </span>
                            </div>
                            <button className="btn btn-neutral mt-4 hover:text-lg hover:bg-emerald-600 bg-emerald-400 font-bold w-full text-black border-none shadow-none">Sign Up</button>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn bg-white font-bold w-full text-black border-[#e5e5e5] my-4 shadow-none hover:text-lg">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Continue with Google
                        </button>
                        <div>
                            <button onClick={handleForgetPassword} className='text-black  hover:underline cursor-pointer text-[15px]'>Forget Password</button>
                            <p className='text-black text-[15px] mt-2'>Already Have An Account?  Go to <Link to='/login' className='font-bold text-blue-400'>Login</Link></p>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default SignUp;