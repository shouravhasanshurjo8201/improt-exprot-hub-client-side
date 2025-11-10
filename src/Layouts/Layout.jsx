
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
 
  return (
    <div className='flex flex-col min-h-screen bg-emerald-100'>
      <Navbar></Navbar>
      <div className='flex-1 container mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  )
}

export default Layout;