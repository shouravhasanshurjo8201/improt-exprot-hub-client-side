import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { useContext } from 'react'
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const EditProfile = () => {
    navigate("/updateProfile");
  }
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className='bg-emerald-100  flex-1 flex flex-col items-center justify-center'>
      <div data-aos="fade-up" className='container mx-auto '>
        <div className="flex flex-col items-center justify-center bg-blue-300 m-10 p-5 rounded-xl w-8/12 lg:w-4/12 mx-auto">
          <img
            src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU';
            }}
            alt="User Avatar"
            className="h-24 w-24 rounded-full border-4 border-emerald-400 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600 mb-6">
            {user?.email || "No email available"}
          </p>
          <button onClick={EditProfile} className="px-4 py-2 bg-emerald-600 font-bold text-white rounded-lg hover:bg-emerald-500 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile;