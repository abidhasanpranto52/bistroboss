const MenuItems = ({ item }) => {
  return (
    <div className="flex m-4 space-x-3 border-yellow-600 rounded-lg p-4 border">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[110px] border-2 border-black"
        src={item.image}
        alt=""
      />
      <div>
        <h2 className=" font-bold">{item.name} --------------</h2>
        <p>{item.recipe}</p>
      </div>
      <p className="text-yellow-500 font-bold">${item.price}</p>
    </div>
  );
};

export default MenuItems;
