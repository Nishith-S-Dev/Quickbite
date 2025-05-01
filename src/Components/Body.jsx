import React from "react"
import RestrauntCard from "./RestruantCard";
import {ResId} from "./config"

const Restruant = ResId;
const Body = ()=>{
    return(
        <>   
            <h1>Some Good Restraunt around you ...</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

            {Restruant.map((data)=>{
                return(
                    <RestrauntCard data={data.info}/>
                )
            })}
            </div>
            
        </>
    )
}
export default Body;