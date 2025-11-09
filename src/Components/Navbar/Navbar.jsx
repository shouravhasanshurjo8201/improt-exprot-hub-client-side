import { useState } from "react";
import { NavLink } from "react-router"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const activeClass = ({ isActive }) => isActive ? 'relative mx-4 py-2 px-5 text-black text-base font-bold overflow-hidden bg-ember-100 rounded-[15px] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[15px] hover:before:left-0 cursor-pointer' : 'mx-4 py-2 px-5 hover:scale-105 hover:text-white active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-400 before:to-blue-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[15px] hover:before:left-0 cursor-pointer';
    const LiLink = (<>
        <li><NavLink to='/' className={activeClass}>Home</NavLink></li>
        <li><NavLink to='/Products' className={activeClass}>Service</NavLink></li>
        <li><NavLink to='/profile' className={activeClass}>Profile </NavLink></li>
    </>)

    return (
        <div className="bg-emerald-400 shadow-sm font-bold">
            <div className="container mx-auto navbar">
                <div className="navbar-start flex items-center">
                    <div className="dropdown relative">
                        <button
                            type="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (<svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            ) : (<svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            > <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            )}
                        </button>

                        {open && (
                            <ul className="menu menu-sm dropdown-content absolute  hover:bg-emerald-800 bg-emerald-700 rounded-b-2xl mt-[-60px] ml-[65px] w-30 p-2 shadow z-50 " >
                                {LiLink}
                            </ul>
                        )}
                    </div>

                    <div>
                        <NavLink to="/">
                            <img src='https://i.postimg.cc/3xy2DgXJ/download-22.jpg' alt="Logo" className="h-15 w-20" />
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {LiLink}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                {user ? <div className="flex justify-between items-center gap-2"><NavLink to='/profile' title={user?.displayName}><img src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU';
                    }}
                    className="h-12 w-12 rounded-full border-3 border-emerald-600" alt="" />
                </NavLink>
                    <button className="btn btn-outline btn-accent bg-emerald-500 text-white font-bold border-none shadow" onClick={handleLogout}>Logout</button></div> : <NavLink to='/login' className="btn btn-outline btn-accent bg-emerald-500 text-white font-bold border-none shadow">Login</NavLink>}
                </div> */}
            </div>
        </div>
    )
}

export default Navbar;




