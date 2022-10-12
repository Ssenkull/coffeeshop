import { useEffect, useState } from "react";
import data from "../../data/data";

import "./PleasurePage.scss";
import Header from "../../components/Header/Header";
import PageDescription from "../../components/PageDescription/PageDescription";
import CoffeItemsBox from "../../components/CoffeeItemsBox/CoffeItemsBox";
import image from "../../resources/pleasureIMG.png";
const PleasurePage = (props) => {
    
    return(
        <div className="pleasure">
            <Header 
            classes={"header-pleasure"}
            title={"For your pleasure"}
            />
            <PageDescription 
            image={image} 
            title={"About our goods"}
            />
            <CoffeItemsBox data={data}/>
        </div>
    )
}

export default PleasurePage;