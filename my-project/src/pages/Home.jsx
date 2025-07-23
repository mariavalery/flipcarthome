
import Categorymenu from "../components/Categorymenu"
import HomeNavbar from "../components/HomeNavbar"
import HomeTopCaroussel from "../components/HomeTopCaroussel"
import ProductSlider from "../components/ProductSlider"
import { beautyFoodToys, electronicSlidesItem } from "../items/ItemsArray"
import flightbanner from "../assets/flightbanner.webp";

function Home() {
  return (
    <div className='bg-gray-50  min-h-screen '>
      <HomeNavbar/>    
      <Categorymenu />
      <HomeTopCaroussel/>
      <ProductSlider items={electronicSlidesItem} title="Best Of Electronics"   bannerImg={flightbanner}/>
      <ProductSlider items={beautyFoodToys} title="Beauty,Foods,Toys and More"/>
    
    </div>
  )
}

export default Home
