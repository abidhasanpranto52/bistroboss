import React from 'react';
import { Helmet } from 'react-helmet-async';
import BgCover from '../Shared/CoverBg/BgCover';
import menuImg from '../../assets/menu//banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessertItems = menu.filter((item) => item.category === "dessert");
    const soupItems = menu.filter((item) => item.category === "soup");
    const saladItems = menu.filter((item) => item.category === "salad");
    const pizzaItems = menu.filter((item) => item.category === "pizza");
    const offeredItems = menu.filter((item) => item.category === "offered");
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <BgCover img={menuImg} title={"Our Menu"}></BgCover>
        <SectionTitle subHeading={"Don't Miss "} heading={"Today's Offer"}></SectionTitle>
        {/* Offered Menu */}
        <MenuCategory items={offeredItems}></MenuCategory>
        
        {/* Desserts Menu */}
        <MenuCategory title={"dessert"} items={dessertItems} coverImg={dessertImg}></MenuCategory>
        
        {/* Pizza */}
        <MenuCategory title={"pizza"} items={pizzaItems} coverImg={pizzaImg}></MenuCategory>
        
        {/* Soup */}
        <MenuCategory title={"soup"} items={soupItems} coverImg={soupImg}></MenuCategory>
        
        {/* Salad */}
        <MenuCategory title={"salad"} items={saladItems} coverImg={saladImg}></MenuCategory>
        
        </div>
    );
};

export default Menu;