
import Categorymenu from "../components/Categorymenu"
import HomeNavbar from "../components/HomeNavbar"
import HomeTopCaroussel from "../components/HomeTopCaroussel"
import ProductSlider from "../components/ProductSlider"
import { beautyFoodToys, categoryItems, electronicSlidesItem, helpmenuItems, homeSliderItems, loginmenuItems } from "../items/ItemsArray"
import flightbanner from "../assets/flightbanner.webp";

function Home() {
  return (
    <div className='bg-gray-50  min-h-screen '>
      <HomeNavbar items1={loginmenuItems} items2={helpmenuItems}/>    
      <Categorymenu items={categoryItems} />
      <HomeTopCaroussel items={homeSliderItems}/>
      <ProductSlider items={electronicSlidesItem} title="Best Of Electronics"   bannerImg={flightbanner}/>
      <ProductSlider items={beautyFoodToys} title="Beauty,Foods,Toys and More"/>
    
    </div>
  )
}

export default Home
