import Categorymenu from "../components/Categorymenu";
import HomeNavbar from "../components/HomeNavbar";
import HomeTopCaroussel from "../components/HomeTopCaroussel";
import ProductSlider from "../components/ProductSlider";
import shopyourfavourite from "../assets/shopyourfavriteneedsbanner.webp";
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
  seasonTopPicksItems,
  monsoonEssentialsItems,
  monsoonReadysalesItems,
  trendinggadgetsandappliancesItems,
  hairandskincareItems,
  fashionTopDeals,
  furnituresTopDeals,
  topDeals,
  mostSearchedFooterItems,
} from "../items/ItemsArray";
import flightbanner from "../assets/flightbanner.webp";
import TopDealsBanner from "../components/TopDealsBanner";
import MostSearchedCard from "../components/MostSearchedCard";
function Home() {
  return (
    <div className="bg-gray-200  min-h-screen ">
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
        <TopDealsBanner
          items={makeYourHomeStylishItems}
          title="Make Your Home Stylish"
        />
        <TopDealsBanner items={seasonTopPicksItems} title="Season Top Picks" />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <TopDealsBanner
          items={homeDecorAndFurnishingItems}
          title="Home Decor And Furnishing"
        />
        <TopDealsBanner
          items={monsoonReadysalesItems}
          title="Monsoon Ready Sales"
        />
        <TopDealsBanner
          items={trendinggadgetsandappliancesItems}
          title="Trending Gadgets And Appliances"
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <TopDealsBanner
          items={hairandskincareItems}
          title="Hair And Skin Care For Monsoon"
        />

        <TopDealsBanner
          items={monsoonEssentialsItems}
          title="Monsoon Essentials"
        />
        <div>
          <img
            src={shopyourfavourite}
            alt="fashion"
            loading="lazy"
            className="hidden md:flex w-[638px] h-[538px]"
          />
        </div>
      </div>
      <ProductSlider
        items={furnituresTopDeals}
        title="furnitures Top Deals"
        showNavigation={true}
      />
      <ProductSlider
        items={fashionTopDeals}
        title="fashion Top Deals"
        showNavigation={true}
      />
      <ProductSlider items={topDeals} title="Top Deals" showNavigation={true} />
      <ProductSlider items={electronicSlidesItem} title="Top Deals On Appliances" showNavigation={false} />
      <footer>
        <div className="mx-4 my-2">
          <div className="text-lg font-semibold px-4 py-2">Top Stories : <a>Brand Directory</a></div>
          <MostSearchedCard items={mostSearchedFooterItems} title="Most Searched For On Flipkart"/>
        </div>
      </footer>
    </div>
  );
}

export default Home;
