import {
  footerExtraSections,
  footerLinkCategories,
  endFooterIcons,
} from "../items/ItemsArray";
import paymentcards from "../assets/end footer icon/paymentcards.svg";

function FooterCopyright() {
  return (
    <div className="flex w-full">
        {/* Main footer content */}
          <div className="flex-col w-full bg-[#172337] text-[3px] md:text-[12px] px-[2px] py-2 md:px-16 md:py-10 md:gap-4 ">
            {/* Footer Link Categories */}
            <div className="flex flex-nowrap justify-between  md:gap-10 ">
            <div className="flex  md:gap-8 md:px-6 px-1">
              {footerLinkCategories.map((section, index) => (
                <div key={index} className="flex-col md:flex">
                  <h3 className="text-[#878787] font-medium mb-2">
                    {section.title}
                  </h3>
                  {section?.categoryItems?.map((item) => (
                    <p key={item.id} className="text-white hover:underline">
                      <a href={item.href}>{item.label}
                      </a>
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer Extra Sections */}
            <div className="flex flex-nowrap md:gap-10 gap-6 border-b-0 border-l border-[#454d5e] md:pl-10 px-5">
              {footerExtraSections.map((section, index) => (
                <div key={index} className="flex md:gap-10  ">
                  {/* First Column */}
                  <div>
                    <h3 className="text-[#878787] font-medium mb-2">
                      {section.title}
                    </h3>
                    {section?.categoryItems?.map((item) => (
                      <p key={item.id} className="text-white whitespace-nowrap ">
                        {item.label}
                        <span className="text-blue-700">{item?.extra?.sublabel}</span>
                      </p>
                    ))}
                    {section.subtitle && (
                      <div className="md:py-4">
                        <h3 className="text-[#878787] font-medium mb-2">
                          {section.subtitle}
                        </h3>
                        <div className="flex gap-3">
                        {section?.socialLinks?.map((item, index) => (
                          
                            <img
                              src={item.icon}
                              key={index}
                              className="text-white md:h-4 md:w-4 h-2 w-2"
                            />
                        
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
</div>
              {/* Copy rights content */}
         <div className="flex md:px-8 text-white border-b-0 border-t border-[#454d5e] py-[2px] md:pt-5 md:mt-3 mt-1">
            <div className="flex md:gap-8 gap-2 md:mx-5">
             {endFooterIcons.map((item)=>(
              <div className="flex md:gap-2 gap-1" key={item.id}>
                <img src={item.icon} className="md:h-4 md:w-4 h-2 w-2"/>
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
             ))}
          </div>
          <div className="flex md:gap-8 gap-1 md:mx-2">
             <span className="whitespace-nowrap">© 2007-2025 <span>Flipkart.com</span></span> 
             <img src={paymentcards} />
          </div>
         </div>
          </div>
    </div>
  )
}

export default FooterCopyright
