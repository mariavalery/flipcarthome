function MostSearchedCard({ items, title }) {
  return (
    <div className="flex  flex-wrap text-gray-900 text-md leading-tight px-4 py-4">
      <span className="text-sm font-medium pr-1">{title} : </span>
      {items.map((item, index) => (
        <div>
          <a className="text-xs  cursor-pointer" title={item.label}>
            {item.label}
            {index !== items.length - 1 && (
              <span className="px-1 text-gray-500">|</span>
            )}
          </a>
        </div>
      ))}
    </div>
  );
}

export default MostSearchedCard;
