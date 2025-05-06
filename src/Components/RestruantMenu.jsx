import { useParams } from "react-router-dom";
import React from "react"
import { Img_CDN } from "./config";
import Shimmer from "./shimmer";
import  useRestruant  from "../hooks/useRestraunt";
import "../utils/RestruantMenu.css"

const RestruantMenu =()=>{
     const {id}= useParams();
    const restruant=useRestruant(id);
    const {RestruantMenu, RestruantMenuItems, loading} = restruant;

    if (loading) return <Shimmer />;

  return (
    <div className="restaurant-container">
   
      <h1 className="restaurant-name">{RestruantMenu.name}</h1>
      <img className="restaurant-image" src={Img_CDN + RestruantMenu.cloudinaryImageId} alt={RestruantMenu.name} />
      <h2 className="restaurant-cuisines">Cuisines: {RestruantMenu.cuisines.join(", ")}</h2>
      <h2 className="restaurant-cost">Cost For Two: ₹{RestruantMenu.costForTwo / 100}</h2>
      {
        RestruantMenuItems.map((category, index) => {
          const itemCategory = category.card?.card;

          if (itemCategory && itemCategory.itemCards) {
            return (
              <div className="menu-category" key={index}>
                <h2 className="category-title">{itemCategory.title}</h2>
                <ul className="menu-items">
                  {itemCategory.itemCards.map((item, idx) => {
                    const dish = item.card.info;
                    return (
                      <li className="menu-item" key={idx}>
                        <div className="menu-item-text">
                          <h3>{dish.name} - ₹{dish.price / 100}</h3>
                          <p>{dish.description}</p>
                        </div>
                        {dish.imageId && (
                          <img
                            className="menu-item-image"
                            src={Img_CDN + dish.imageId}
                            alt={dish.name}
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
    </div>
  )
}
export default RestruantMenu;