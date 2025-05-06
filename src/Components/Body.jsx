import React ,{useState,useEffect} from "react"
import RestrauntCard from "./RestruantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {filteredRestraunt} from "../utils/helper"
import useOnline from "../hooks/useOnline";
import Lottie from 'lottie-react';
import noInternetAnimation from "../utils/animation.json";

const Body = ()=>{
    const [SearchText,setSearchText] = useState("");

    const [RestruantList,setRestrauntList ]= useState([]);
    const [filteredRestrauntList , setFilteredRestrauntList ]= useState([]);
  

    const ApiCall = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setFilteredRestrauntList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestrauntList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    console.log("Render")
   
    useEffect(()=>{
        ApiCall();
    },[]);
 const isOnline = useOnline();
 if (!isOnline) {
    return (
        <>
          {!isOnline && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Lottie animationData={noInternetAnimation} loop={true} style={{ width: 300, height: 300 }} />
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', marginTop: '20px' }}>
                Oops! You're offline. Trying to reconnect...
              </p>
            </div>
          )}
        </>
      );
 }
   
    return (RestruantList.length===0) ? <Shimmer/> : (
        
    
        <>   
            <div className="Search-Bar" style={{margin:"20px",  display:"flex",gap:"22px"}}>
                <input type="text" placeholder="Search Restraunt"  style={{width:"25%",height:"40px",fontSize:"20px",padding:"10px",borderRadius:"10px"}}value={SearchText} onChange={(e)=>{
                   setSearchText(e.target.value) 
                }}/>
            

            <button onClick={()=>{
                const data = filteredRestraunt(SearchText,RestruantList);
                setFilteredRestrauntList(data);

            }}>Search</button>
            </div>

            <h1>Some Good Restraunt around you ...</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"}}>

            {filteredRestrauntList.map((data)=>{
                return(
                    <>
                    <Link to={`/restraunt/${data.info.id}`} style={{color:"black",listStyle:"none",textDecoration:"none"}} > <RestrauntCard key={data.info.id } data={data.info}/></Link>
                    
                    
                    </>
                )
            })}
            </div>
            
        </>
    )
}
export default Body;