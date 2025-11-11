
const Footer = () => {
    return (
        <div className="bg-background3">
            <div className="container mx-auto">
                <div className="lg:flex justify-around items-center p-10 gap-10 text-white">
                    <div className="w-full pb-2">
                        <h1 className="text-xl font-bold mb-2">Import Export Hub</h1>
                        <p className="text-[12px] text-justify">The Import Export Hub aims to create a single platform for traders and individual users to search for products worldwide, plan imports, and effectively manage their personal import inventory.</p>
                    </div>
                    <div className="w-full lg:pl-10 flex flex-col pb-2">
                        <h1 className="text-xl font-bold mb-2">Company</h1>
                        <span className="hover:underline cursor-pointer">About Us</span>
                        <span className="hover:underline cursor-pointer">Our Mission</span>
                        <span className="hover:underline cursor-pointer">Contact </span>
                    </div>
                    <div className="w-full  flex flex-col pb-2">
                        <h1 className="text-xl font-bold mb-2">Services</h1>
                        <span className="hover:underline cursor-pointer">Products & Services</span>
                        <span className="hover:underline cursor-pointer">Customer Stories</span>
                        <span className="hover:underline cursor-pointer">Download Apps</span>
                    </div>
                    <div className="w-full  flex flex-col pb-2">
                        <h1 className="text-xl font-bold mb-2">Information</h1>
                        <span className="hover:underline cursor-pointer">Privacy Policy</span>
                        <span className="hover:underline cursor-pointer">Terms & Conditions</span>
                        <span className="hover:underline cursor-pointer">Join Us</span>
                    </div>
                    <div className="w-full  flex flex-col">
                        <h1 className="text-xl font-bold mb-2">Social Links</h1>
                        <span className="hover:underline cursor-pointer flex"><img className='h-5 w-5 mr-2 my-1 rounded' src='https://i.postimg.cc/VsBgYBgS/download-21.jpg' alt="" /> Facebook</span>
                        <a className="hover:underline cursor-pointer flex"><img className='h-5 w-5 mr-2 my-1 rounded' src='https://i.postimg.cc/XqwzWRJn/download-20.jpg' alt="" /> Twitter</a>
                        <span className="hover:underline cursor-pointer flex"><img className='h-5 w-5 mr-2 my-1 rounded' src='https://i.postimg.cc/3xy2DgXJ/download-22.jpg' alt="" /> Instagram</span>
                    </div>
                </div>
                <div className="text-center text-white text-md p-5 border-t">
                    <h1>© 2025 Import Export Hub. All rights reserved.</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;