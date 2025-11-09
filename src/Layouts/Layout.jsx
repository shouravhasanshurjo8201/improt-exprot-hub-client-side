
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-emerald-50'>
      
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout ;