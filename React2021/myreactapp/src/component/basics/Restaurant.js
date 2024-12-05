import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),"All"
]

const Restaurant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    if (category === "All") {
        setMenuData(Menu); // Display all items
    } else {
        const updatedList = Menu.filter((curElem) => curElem.category === category);
        setMenuData(updatedList);
    }
};

  return (
    <>
      <Navbar filterItem = {filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
