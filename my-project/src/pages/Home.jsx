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
  
 
} from "../items/ItemsArray";
import flightbanner from "../assets/flightbanner.webp";
import TopDealsBanner from "../components/TopDealsBanner";
import FooterSection from "../components/FooterSection";
import FooterCopyright from "../components/FooterCopyright";

function Home() {
  return (
    <div className="bg-[#f5f5f5] ">
      <div>
      <HomeNavbar items1={loginmenuItems} items2={helpmenuItems} />
       <div className="py-2 ">
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
      <FooterSection/>
      <FooterCopyright/>
     </div>
    </div>
    </div>
  );
}

export default Home;
