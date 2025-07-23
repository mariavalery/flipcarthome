
import Categorymenu from "../components/Categorymenu"
import HomeNavbar from "../components/HomeNavbar"
import HomeTopCaroussel from "../components/HomeTopCaroussel"
import ProductSlider from "../components/ProductSlider"
import { electronicSlidesItem } from "../items/ItemsArray"


function Home() {
  return (
    <div className='bg-gray-50  min-h-screen '>
      <HomeNavbar/>    
      <Categorymenu />
      <HomeTopCaroussel/>
      <ProductSlider items={electronicSlidesItem}/>

    
    </div>
  )
}

export default Home
