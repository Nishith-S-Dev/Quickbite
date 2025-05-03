import { useParams } from "react-router-dom";
import React,{useEffect, useState} from "react"
import { Img_CDN } from "./config";
import Shimmer from "./shimmer";

const RestruantMenu =()=>{
    const {id}= useParams();
    const [RestruantMenu,SetRestrauntMenu]= useState([]);
    const [RestruantMenuItems,SetRestrauntMenuItems]= useState([]);
    async function Apicall(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.4595042&lng=75.9094179&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
        console.log(json.data.cards[2].card.card.info)
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

        
        SetRestrauntMenu(json.data.cards[2].card.card.info);
        SetRestrauntMenuItems(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
            }
    useEffect(()=>{
        Apicall()
    },[])

  return RestruantMenu.length===0 ? <Shimmer/> : (
    
    
    <>
    <h2>id:{id}</h2>
    <h1>{RestruantMenu.name}</h1>
    <img src={Img_CDN+RestruantMenu.cloudinaryImageId} style={{width:"300px",height:"300px"}}></img>
    <h2>Cuisines:{RestruantMenu.cuisines}</h2>
    <h2>CostForTwo:{RestruantMenu.costForTwo}</h2>
    {
      RestruantMenuItems.map((category, index) => {
        const itemCategory = category.card?.card;

        if (itemCategory && itemCategory.itemCards) {
          return (
            <div key={index}>
              <h2>{itemCategory.title}</h2>
              <ul>
                {itemCategory.itemCards.map((item, idx) => {
                  const dish = item.card.info;
                  return (
                    <li key={idx}>
                      <h3>{dish.name} - ₹{dish.price / 100}</h3>
                      <p>{dish.description}</p>
                      {dish.imageId && (
                        <img
                          src={Img_CDN + dish.imageId}
                          alt={dish.name}
                          style={{ width: "150px", height: "100px" }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
        return null;
      })
    }
    </>
  )
}
export default RestruantMenu;