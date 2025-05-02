import React ,{useState} from "react"
import RestrauntCard from "./RestruantCard";
import {ResId} from "./config"

const Restruant = ResId;
const Body = ()=>{
    const [SearchText,setSearchText] = useState("");

    const [RestruantList , setRestrauntList ]= useState(Restruant);
    console.log("Render")
    const filteredRestraunt =(searchText,restruant)=>{
        const filterData = restruant.filter((e)=>{
            return e.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        return filterData;
    }
    return(
        <>   
            <div className="Search-Bar" style={{margin:"20px",  display:"flex",gap:"22px"}}>
                <input type="text" placeholder="Search Restraunt"  style={{width:"25%",height:"40px",fontSize:"20px",padding:"10px",borderRadius:"10px"}}value={SearchText} onChange={(e)=>{
                   setSearchText(e.target.value) 
                }}/>
            

            <button onClick={()=>{
                const data = filteredRestraunt(SearchText,Restruant);
                    setRestrauntList(data);

            }}>Search</button>
            </div>

            <h1>Some Good Restraunt around you ...</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

            {RestruantList.map((data)=>{
                return(
                    <RestrauntCard key={data.id} data={data.info}/>
                )
            })}
            </div>
            
        </>
    )
}
export default Body;