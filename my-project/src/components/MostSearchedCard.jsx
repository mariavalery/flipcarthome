function MostSearchedCard({ linkItems }) {
  
  return (
    <div > 
    {linkItems.map((items,index)=>(     <div key={index} className="flex  flex-wrap text-md leading-tight px-1 py-1" >
      <span className="text-sm font-normal ">{items.title} : </span>
      {items?.categoryItems?.map((item, index) => (
        <div key={item.id}>
          <a className="text-xs  cursor-pointer" title={item.label}>
            {item.label}
            {index !== items.length - 1 && (
              <span className="px-1 ">|</span>
            )}
          </a>
        </div>
      ))}
    </div>))}
</div>
  
  );
}

export default MostSearchedCard;
