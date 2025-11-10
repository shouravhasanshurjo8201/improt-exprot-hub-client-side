import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react"
import { useLocation } from "react-router";
import { toast } from "react-hot-toast";
import { auth } from "../../Firebase/Firebase.config";

const ForgetPassword = () => {
    const location = useLocation();
    const [Email, setEmail] = useState(location.state?.email || "");
    const handleForgetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, Email)
            .then(() => {
                toast.success("Check your email to reset password");
                window.open(`https://mail.google.com/mail`, "_blank");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }
    return (
        <div className='container mx-auto flex-1'>
            <div className='flex flex-col justify-center items-center m-10' >
                <div className=" bg-emerald-300 border-base-200 rounded-box w-xs border p-4 text-white">
                    <form onSubmit={handleForgetPassword} >
                        <input type="email" name="Email" className="input bg-white text-sm text-black my-3" onChange={(e) => setEmail(e.target.value)} value={Email} />
                        <button className="btn btn-neutral mt-2 bg-cyan-500 hover:bg-cyan-400 font-bold text-white border-none shadow-none w-full">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;