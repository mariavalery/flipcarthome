import Categorymenu from "../components/Categorymenu"
import HomeNavbar from "../components/HomeNavbar"


function Home() {
  return (
    <div className='bg-gray-100  min-h-screen'>
      <HomeNavbar/>
    <div className="md:mx-4 md:my-2">
      <Categorymenu />
    </div>
    </div>
  )
}

export default Home
