import Categorymenu from "../components/Categorymenu"
import HomeNavbar from "../components/HomeNavbar"
import HomeTopCaroussel from "../components/HomeTopCaroussel"



function Home() {
  return (
    <div className='bg-gray-100  min-h-screen '>
      <HomeNavbar/>
    
      <Categorymenu />
      <HomeTopCaroussel/>
    
    </div>
  )
}

export default Home
