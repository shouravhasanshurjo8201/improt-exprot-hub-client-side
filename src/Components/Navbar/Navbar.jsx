import { useContext, useState } from "react";
import { NavLink } from "react-router"
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";
import Logo from "../../assets/logo.png";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const activeClass = ({ isActive }) => isActive ? 'btn-secondary shadow-md text-black hover:text-white rounded-xl' : 'btn-secondary rounded-xl';
    const LiLink = (<>
        <li><NavLink to='/' className={activeClass}>Home</NavLink></li>
        <li><NavLink to='/Products' className={activeClass}>All Products</NavLink></li>
        <li><NavLink to='/MyImports' className={activeClass}>My Imports</NavLink></li>
        <li><NavLink to='/MyExports' className={activeClass}>My Exports</NavLink></li>
        <li><NavLink to='/AddExportProduct' className={activeClass}>Add Export</NavLink></li>
    </>)

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
    return (
        <div className="bg-background1 shadow-sm font-bold sticky top-0 z-1">
            <div className="container mx-auto navbar">
                <div className="navbar-start flex items-center">
                    <div className="dropdown relative">
                        <button type="button" className="btn btn-ghost lg:hidden" onClick={() => setOpen(!open)} >
                            {open ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>)}
                        </button>

                        {open && (
                            <ul className="menu menu-sm dropdown-content absolute bg-background1 rounded-b-2xl mt-[-60px] ml-[65px] w-40 p-2 shadow z-50 " >
                                {LiLink}
                            </ul>
                        )}
                    </div>

                    <div>
                        <NavLink to="/">
                            <img src={Logo} alt="Logo" className="h-15 w-18 rounded-2xl" />
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {LiLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className="flex justify-between items-center gap-2"><NavLink to='/profile' title={user?.displayName}><img src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU';
                        }}
                        className="h-12 w-12 rounded-full border-3 border-emerald-700" alt="" />
                    </NavLink>
                        <button className="btn-secondary shadow-md" onClick={handleLogout}>Logout</button></div> : <NavLink to='/login' className="btn-secondary shadow-md">Login</NavLink>}
                </div>
            </div>
        </div>
    )
}

export default Navbar;




