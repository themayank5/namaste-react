import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";





// const resObj1 = {
    
//         "info": {
//           "id": "90709",
//           "name": [
//             "Barbeque Nation ",
//             "KFC",
//             "Pizza Hut",
//             "Domono",
//             "Burger King",
//             "Burgur Singh"
            
//           ],
//           "cloudinaryImageId": "atchbvbnwn9kumsbcxv5",
//           "locality": [
//             "LAXMI NAGAR",
//             "Preet vihar",
//             "Nirman vihar",
//             "vaishali",
//             "anand vihar",
//             "yamuna bank",
//           ],
//           "areaName": "V3S MALL",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "North Indian",
//             "Barbecue",
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Desserts"
//           ],
//           "avgRating": [
//             3.7, 3.7, 4.6, 5.5, 6.4, 2.1
//           ],
//           "parentId": "10804",
//           "avgRatingString": "3.7",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 38,
//             "lastMileTravel": 4.8,
//             "serviceability": "SERVICEABLE",
//             "slaString": "35-40 mins",
//             "lastMileTravelString": "4.8 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-04-04 16:30:00",
//             "opened": true
//           }
//         }
      
// }

















const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body />
            


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);