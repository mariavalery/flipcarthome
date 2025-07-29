import {
  footerExtraSections,
  footerLinkCategories,
  endFooterIcons,
} from "../items/ItemsArray";
import paymentcards from "../assets/end footer icon/paymentcards.svg";

function FooterCopyright() {
  return (
    <div>
        {/* Main footer content */}
          <div className="bg-black text-[12px] px-16 py-10 flex-col ">
            {/* Footer Link Categories */}
            <div className="flex justify-between flex-wrap gap-10">
            <div className="flex flex-wrap gap-10">
              {footerLinkCategories.map((section, index) => (
                <div key={index}>
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
            <div className="flex flex-wrap gap-10 border-b-0 lg:border-l lg:border-[#454d5e] pl-10">
              {footerExtraSections.map((section, index) => (
                <div key={index} className="flex gap-10">
                  {/* First Column */}
                  <div>
                    <h3 className="text-[#878787] font-medium mb-2">
                      {section.title}
                    </h3>
                    {section?.categoryItems?.map((item) => (
                      <p key={item.id} className="text-white">
                        {item.label}
                        <span className="text-blue-700">{item?.extra?.sublabel}</span>
                      </p>
                    ))}
                    {section.subtitle && (
                      <div className="py-4">
                        <h3 className="text-[#878787] font-medium mb-2">
                          {section.subtitle}
                        </h3>
                        <div className="flex gap-3">
                        {section?.socialLinks?.map((item, index) => (
                          
                            <img
                              src={item.icon}
                              key={index}
                              className="text-white h-4 w-4 "
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
         <div className="flex px-8 text-white border-b-0 lg:border-t lg:border-[#454d5e] pt-5 mt-3">
            <div className="flex gap-8 mx-5">
             {endFooterIcons.map((item)=>(
              <div className="flex gap-2">
                <img src={item.icon}/>
                <span>{item.label}</span>
              </div>
             ))}
          </div>
          <div className="flex gap-8 mx-5">
             <span >© 2007-2025 <span>Flipkart.com</span></span> 
             <img src={paymentcards}/>
          </div>
         </div>
          </div>
    </div>
  )
}

export default FooterCopyright
