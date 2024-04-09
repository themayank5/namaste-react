import { CARD_IMG } from "./utils/constant";

const styleCard =  {
    backgroundColor:"#f0f0f0",
    width: '20%',
    border: '1px solid',
    margin: '10px 5px',
    
}



// //props property
// const RestaurentCard = (props) =>{
//     const{resData} = props;
//     const{name,locality,cuisines,areaName,costForTwo, sla} = resData.info;
//     // console.log(resList[0].info.name);
//     return(
//         <div className="res-card" style={styleCard}>
//            <img className="food_logo" alt="food logo" src={CARD_IMG} />
//            <h5>Restaurent Name:{name}</h5>
//            <h5>locality:{locality}</h5>
//            <h5>cuisines:{cuisines[0]}</h5>
//            <h5>Area Name:{areaName}</h5>
//            <h5>cost For Two:{costForTwo}</h5>
//            <h5>DeliveryTime:{sla.deliveryTime}</h5>
//            <h5>last Mile Travel:{sla.lastMileTravel}</h5>
//         </div>
//     )
//  }

//Hooks 
//props property
export const RestaurentCard1 = (props) =>{
    const{resData} = props;
    const{name,locality,cuisines,avgRating,costForTwo, deliveryTime} = resData.info;
    // console.log(resList[0].info.name);
    return(
        <div className="res-card" style={styleCard}>
           <img className="food_logo" alt="food logo" src={CARD_IMG} />
           <h5>Restaurent Name:{name}</h5>
           <h5>locality:{locality}</h5>
           <h5>cuisines:{cuisines[0]}</h5>
           <h5>avgRating:{avgRating}</h5>
           <h5>Delivery Time:{deliveryTime}</h5>
          
           <h5>cost For Two:{costForTwo}</h5>
          
        </div>
    )
 }



//  export default RestaurentCard;