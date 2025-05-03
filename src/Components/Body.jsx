import React ,{useState,useEffect} from "react"
import RestrauntCard from "./RestruantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


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
    const filteredRestraunt =(searchText,RestruantList)=>{
        const filterData = RestruantList.filter((e)=>{
            return e.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        return filterData;
    }
    useEffect(()=>{
        ApiCall();
    },[]);
   
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