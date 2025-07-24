function Categorymenu({ items }) {
  return (
    <div className="bg-white shadow-md md:mx-4 md:my-2">
      <div className="flex items-center py-4 px-6 gap-8 overflow-x-auto scrollbar-hide md:w-full max-w-screen-xl mx-auto ">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center text-sm cursor-pointer ${
              index === 0 ? "ml-4" : index === items.length - 1 ? "mr-4" : ""
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-16 h-16 object-contain"
            />
            <span className="mt-1 whitespace-nowrap font-medium text-gray-800 hover:text-blue-600">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorymenu;
