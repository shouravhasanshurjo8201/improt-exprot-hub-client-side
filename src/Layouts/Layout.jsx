
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
 
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <div className='flex-1 container mx-auto p-2'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  )
}

export default Layout;