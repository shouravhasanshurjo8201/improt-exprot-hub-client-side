
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-emerald-50'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  )
}

export default Layout;