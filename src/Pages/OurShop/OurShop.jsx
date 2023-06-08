import { Helmet } from "react-helmet-async";
import BgCover from "../Shared/CoverBg/BgCover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import FoodCart from "../Shared/FoodCart/FoodCart";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const catagories = ['salad', 'pizza', 'soup','dessert','drinks']
  const {category} = useParams();
  const initialIndex = catagories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const soupItems = menu.filter((item) => item.category === "soup");
  const saladItems = menu.filter((item) => item.category === "salad");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const drinksItems = menu.filter((item) => item.category === "drinks");
  const offeredItems = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <BgCover img={shopImg} title={"Our Shop"}></BgCover>
      <Tabs className="border mb-2 rounded-md items-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center p-4 font-bold">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
            {saladItems.map((item) => (
              <FoodCart key={item._id} item={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  ">
            {pizzaItems.map((item) => (
              <FoodCart key={item._id} item={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
            {soupItems.map((item) => (
              <FoodCart key={item._id} item={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
            {dessertItems.map((item) => (
              <FoodCart key={item._id} item={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
            {drinksItems.map((item) => (
              <FoodCart key={item._id} item={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
