import { Outlet } from 'react-router'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
      <>
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          {/* Content goes here */}
          <Outlet/>
        </main>
        <Footer/>

      </>
  )
}

export default Layout