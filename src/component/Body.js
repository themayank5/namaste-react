// import RestaurentCard from "./RestaurentCard";
import resList from "./utils/mockData";
import { RestaurentCard1 } from "./RestaurentCard";
import { useState } from "react";



const Body = () =>{

const [ListofRestaurent, setListofRestaurent] = useState(resList)


  
    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={() =>{
                
                FilterList = ListofRestaurent.filter(
                  (res) => res.info.avgRating > 4
                );
                setListofRestaurent(FilterList);
              }}>
                Top Rated Restaurent
              </button>

              

              

              

             

              <button className="filter-btn" onClick={() =>{
                
                FilterList = ListofRestaurent.filter(
                  (res) => res.info.deliveryTime < 30  
                );
                setListofRestaurent(FilterList);
              }}>
                Delevery Time below 30 Min
              </button>

            </div>
            <div className="res-container">

                {/* <RestaurentCard resData={resList[0]}/>
                <RestaurentCard resData={resList[1]}/> */}
                
                

                {/* map function for props */}
                {/* {
                    resList.map((restaurent1) =>(
                        <RestaurentCard key={restaurent1.info.id} resData={restaurent1} />
                    ))
                } */}



                {/* map function for Hooks */}
                {
                    ListofRestaurent.map((restaurent1) =>(
                        <RestaurentCard1 key={restaurent1.info.id} resData={restaurent1} />
                    ))
                }  
            </div>
        </div>
    )
}


export default Body;