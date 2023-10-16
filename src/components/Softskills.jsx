function Softskills({title, img}) {
  return (
      <div className="grid grid-cols-2 gap-3">
        <div className="overflow-hidden bg-cover bg-no">
          <img src={img} alt="softskill" className=""/> 
        </div>
        <div className="flex items-center">
          <p className="text-white font-bold">{title}</p>
        </div>
      </div>
    );
}

export default Softskills 