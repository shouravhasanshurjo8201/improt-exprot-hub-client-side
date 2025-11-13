import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
const UpdateProfile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    useDynamicTitle("Update Profile");
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, { displayName, photoURL })
            .then(() => {
                setUser({ ...auth.currentUser });
                navigate("/profile");
            })
            .catch((e) => {
                toast.error(e.message)
            })
    }
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="flex flex-col items-center justify-center flex-1 ">
            <div data-aos="fade-up" className='container mx-auto '>
                <form onSubmit={handleUpdateProfile}>
                    <div className=" flex flex-col gap-2 justify-center items-center bg-background1 m-10 p-5 rounded-xl w-8/12 lg:w-4/12 mx-auto">
                        <input type="text" name='Name' className="input bg-white text-sm text-black my-5" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
                        <input type="text" name='Photo' className="input bg-white text-sm text-black my-5" onChange={(e) => setPhotoURL(e.target.value)} value={photoURL} />
                        <button className="px-4 py-2 bg-emerald-600 font-bold text-white rounded-lg hover:bg-emerald-500 transition">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;