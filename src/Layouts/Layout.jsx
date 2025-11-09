
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-emerald-50'>
      <p>hello</p>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout ;