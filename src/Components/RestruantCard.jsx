import {ResId} from "./config"
import React from "react"
import { Img_CDN } from "./config"

console.log(ResId)
const RestrauntCard =({data})=>{
    return(
        <>
        <div style={{width:"200px",height:"400px",border:"1px solid black",margin:"22px",padding:"22px", borderRadius:"12%" ,boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center"}}>
           <img src={Img_CDN+data.cloudinaryImageId} alt="no image found" style={{width:"200px",height:"200px",borderRadius:"12%"}} />
           <h4>{data.name}</h4>
           <p style={{display:"flex",flexWrap:"wrap"}}>{data.cuisines.join(' , ')}</p>
           <p>{data.costForTwo}</p>
        </div>
        </>
    )
}
export default RestrauntCard;