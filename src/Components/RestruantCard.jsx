import {ResId} from "./config"
import React from "react"
import { Img_CDN } from "./config"

console.log(ResId)
const RestrauntCard =({data})=>{
    return(
        <>
        <div style={{width:"200px",height:"300px ,",border:"1px solid black",margin:"22px",padding:"22px"}}>
           <img src={Img_CDN+data.cloudinaryImageId} alt="no image found" style={{width:"200px",height:"200px",borderRadius:"12%"}} />
           <h4>{data.name}</h4>
           <p style={{display:"flex",flexWrap:"wrap"}}>{data.cuisines.join(' , ')}</p>
           <p>{data.costForTwo}</p>
        </div>
        </>
    )
}
export default RestrauntCard;