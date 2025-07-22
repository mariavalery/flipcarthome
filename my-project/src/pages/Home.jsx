import BestOfElectronics from "../components/BestOfElectronics"
import Categorymenu from "../components/Categorymenu"
import HomeNavbar from "../components/HomeNavbar"
import HomeTopCaroussel from "../components/HomeTopCaroussel"



function Home() {
  return (
    <div className='bg-gray-50  min-h-screen '>
      <HomeNavbar/>
    
      <Categorymenu />
      <HomeTopCaroussel/>
      <BestOfElectronics/>
    
    </div>
  )
}

export default Home
