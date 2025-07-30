import { trendingNavbarItems } from "../items/ItemsArray";
import searchicon from "../assets/searchicon.svg";
function SearchAutoSuggestion() {
  return (<div className="absolute left-0 w-full top-full bg-white rounded-b-md ">
              <h4 className="px-4 py-4 font-medium text-gray-500">Trending</h4>
              <ul>
                {trendingNavbarItems.map((item)=>(
                  <li key={item.id} className="flex gap-3 py-3 px-2 hover:bg-blue-50">
                    <img src={searchicon}/>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>)
}

export default SearchAutoSuggestion
