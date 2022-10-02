import Footer from './Footer'
import Navbar from './Navbar'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
