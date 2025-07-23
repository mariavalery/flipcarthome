import { FaChevronRight } from "react-icons/fa";

function TopDealsBanner({ items, title }) {
  return (
    <div className="bg-white mx-4 my-2  md:w-8/12 p-4 rounded shadow ">
      <div className="flex justify-between">
        <header className="text :xl md:text-2xl font-semibold py-2 px-4 ">
          {title}
        </header>
        <div className="w-10 h-8 rounded-full bg-blue-600 flex items-center justify-center py-2">
          <a>
            <svg
  className="m-1"
  width="16"
  height="16"
  fill="none"
  viewBox="0 0 17 17"
>
  <path
    d="m6.627 3.749 5 5-5 5"
    stroke="#FFFFFF"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex md:flex-col items-center border border-gray-200 p-3 rounded"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-14 h-16 md:w-24 md:h-24 object-contain"
            />
            <div className="px-4">
              <p className="font-medium text-gray-800">{item.label}</p>
              <p className="text-sm text-green-900">{item.sublabel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDealsBanner;
