import { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { auth } from '../../Firebase/Firebase.config';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Context/AuthContext';


const Login = () => {
  const provider = new GoogleAuthProvider();
  const { user, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const userLocation = useLocation();
  const from = userLocation.state?.from?.pathname || "/";
  if (user) {
    return <Navigate to="/" />
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const Email = e.target.Email?.value;
    const Password = e.target.Password?.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    if (Email === "") {
      toast.error("Please enter a valid email address!");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(Password)) {
      toast.error("Password must be at least 6 characters and contain both uppercase and lowercase letters");
      return;
    }

    signInWithEmailAndPassword(auth, Email, Password)
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
        toast.success("Login Successful");
      })
      .catch((e) => {
        toast.error(e.message)
      })
  }
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
        toast.success("Login Successful");
      })
      .catch((e) => {
        toast.error(e.message)
      })
  }
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logout Successful");
      })
      .catch((e) => {
        toast.error(e.message)
      })
  }
  const [email, setEmail] = useState("");
  const handleForgetPassword = () => {
    navigate("/forgetPassword", { state: { email } });
  }

  return (
    <div className='flex flex-col justify-center items-center flex-1 min-h-screen'>
      <div data-aos="fade-up" className='container mx-auto '>
        <div className='flex flex-col justify-center items-center p-5' >
          <div className=" bg-emerald-300 border-base-200 rounded-box w-xs border p-4 text-white">
            {user ? '' : <h1 className='text-center font-bold text-black text-xl'>Login</h1>}
            {user ? <div className='flex flex-col justify-center items-center'>
              <img src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'} className="h-18 w-18 rounded-full" alt="" />
              <h1 className='text-xl text-blue-600 text-center font-bold mt-3'>{user?.displayName}</h1>
              <p className='text-2xl text-black text-center mb-5 mt-2'>User Already Login</p>
              <button onClick={handleLogout} className="btn btn-outline btn-accent bg-emerald-400 text-white font-bold">Logout</button>
            </div> : <div>
              <form onSubmit={handleLogin}>
                <div className='fieldset'>
                  <input type="email" name="Email" onChange={(e) => setEmail(e.target.value)} className="input bg-white text-sm text-black my-5" placeholder="Enter Email Address" />

                  <div className='flex justify-between items-center relative'>
                    <input type={show ? "text" : "password"} name='Password' className="input bg-white text-sm text-black" placeholder={show ? "Enter Password" : "••••••••"} /><span
                      onClick={() => setShow(!show)}
                      className="absolute right-3  cursor-pointer text-lg">
                      {show ? "👀" : "👁️"}
                    </span>
                  </div>
                  <button className="btn btn-neutral mt-4 bg-cyan-400 font-bold text-black border-none shadow-none">Login</button>
                </div>
              </form>
              <div>
                <button onClick={handleGoogleLogin} className="btn bg-white font-bold w-full text-black border-[#e5e5e5] my-4 border-none shadow-none">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Continue with Google
                </button>
                <button onClick={handleForgetPassword} className='text-black  hover:underline cursor-pointer'>Forget Password</button>
                <p className='text-black mt-2'>Don't have an Account?  Go to  <Link to='/signup' className='font-bold text-blue-600'>Sign Up</Link></p>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;