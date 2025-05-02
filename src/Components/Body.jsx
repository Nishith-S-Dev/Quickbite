import React ,{useState,useEffect} from "react"
import RestrauntCard from "./RestruantCard";



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
   if (!RestruantList) return null;
    return(
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
                    
                    <RestrauntCard key={data.info.id } data={data.info}/>
                    
                )
            })}
            </div>
            
        </>
    )
}
export default Body;