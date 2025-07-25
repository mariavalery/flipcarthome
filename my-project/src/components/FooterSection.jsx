import { jsonLinks, footerLinkCategories, footerExtraSections } from "../items/ItemsArray";
import MostSearchedCard from "./MostSearchedCard";

function FooterSection() {
  return (
    <div>
      <footer className="hidden md:flex text-[#87878a]">
        <div className="mx-4 my-2 px-4 py-2 w-full">
          {/* Top Stories */}
          <div className="text-md font-medium">
            Top Stories : <a>Brand Directory</a>
          </div>

          {/* Most Searched */}
          <MostSearchedCard
            linkItems={jsonLinks}
            title="Most Searched For On Flipkart"
          />

          {/* Main footer content */}
          <div className="bg-black text-[12px] px-16 py-10 flex justify-between flex-wrap gap-10  border-b-0 lg:border-b lg:border-[#454d5e] ">
            {/* Footer Link Categories */}
            <div className="flex flex-wrap gap-10">
              {footerLinkCategories.map((section, index) => (
                <div key={index}>
                  <h3 className="text-[#878787] font-medium mb-2">{section.title}</h3>
                  {section?.categoryItems?.map((item) => (
                    <p key={item.id} className="text-white hover:underline">
                      <a href={item.href}>{item.label}</a>
                    </p>
                  ))}
                </div>
              ))}
            </div>
  
            {/* Footer Extra Sections */}
            <div className="flex flex-wrap gap-10 border-b-0 lg:border-l lg:border-[#454d5e] pl-10">
              {footerExtraSections.map((section, index) => (
                <div key={index} className="flex gap-10">
                  {/* First Column */}
                  <div>
                    <h3 className="text-[#878787] font-medium mb-2">{section.title}</h3>
                    {section?.categoryItems?.map((item) => (
                      <p key={item.id} className="text-white">
                        {item.label}
                      </p>
                    ))}
                      {section.subtitle && (
                    <div className="py-4">
                      <h3 className="text-[#878787] font-medium mb-2">{section.subtitle}</h3>
                      {section?.socialLinks?.map((item, index) => (
                        <p key={index} className="text-white">
                          {item.icon}
                        </p>
                      ))}
                    </div>
                  )}
                  </div>

               
                
                </div>
              ))}
            </div>
          </div>

          {/* Copy rights content */}
          <div>
             <p className="text-white">Become a seller</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
