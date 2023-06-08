import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="text-center mb-5">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {
            popularItems.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
        }
      </div>
        <Link to={'/menu'}>
        <button className="btn  btn-outline border-1 item-center border-b-4 mt-4">View Full Menu</button>
        </Link>
    </section>
  );
};

export default PopularMenu;
