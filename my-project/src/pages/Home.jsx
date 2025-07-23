import Categorymenu from "../components/Categorymenu";
import HomeNavbar from "../components/HomeNavbar";
import HomeTopCaroussel from "../components/HomeTopCaroussel";
import ProductSlider from "../components/ProductSlider";
import {
  beautyFoodToys,
  categoryItems,
  electronicSlidesItem,
  helpmenuItems,
  homeSliderItems,
  loginmenuItems,
  sportsHealthFoodItems,
  fashionDealsItems,
  makeYourHomeStylishItems,
  homeDecorAndFurnishingItems,
} from "../items/ItemsArray";
import flightbanner from "../assets/flightbanner.webp";
import TopDealsBanner from "../components/TopDealsBanner";
function Home() {
  return (
    <div className="bg-gray-50  min-h-screen ">
      <HomeNavbar items1={loginmenuItems} items2={helpmenuItems} />
      <Categorymenu items={categoryItems} />
      <HomeTopCaroussel items={homeSliderItems} />
      <ProductSlider
        items={electronicSlidesItem}
        title="Best Of Electronics"
        bannerImg={flightbanner}
        showNavigation={true}
      />
      <ProductSlider
        items={beautyFoodToys}
        title="Beauty,Foods,Toys and More"
        showNavigation={true}
      />
      <ProductSlider
        items={sportsHealthFoodItems}
        title="Sports,Healthcare & More"
        showNavigation={false}
      />
      <div className="flex flex-col md:flex-row md:space-x-4">
        <TopDealsBanner items={fashionDealsItems} title="Top Fashion Deals" />
        <TopDealsBanner items={makeYourHomeStylishItems} title="Make Your Home Stylish" />
        <TopDealsBanner items={homeDecorAndFurnishingItems} title="Home Decor And Furnishing" />
      </div>
    </div>
  );
}

export default Home;
