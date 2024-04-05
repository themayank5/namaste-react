import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard =  {
    backgroundColor:"#f0f0f0",
    width: '20%',
    border: '1px solid',
    margin: '10px 5px',
    
}


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


const resList = [
    {
      "info": {
        "id": "636890",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "1st Phase",
        "areaName": "Mayur Vihar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "61955",
        "avgRatingString": "4.2",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-05 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chinese-wok-1st-phase-mayur-vihar-delhi-636890",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "12912",
        "name": "Mehfil",
        "cloudinaryImageId": "vzrprjjoeq5cdp9cusp4",
        "locality": "L Block",
        "areaName": "Sector 11",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Mughlai",
          "Chinese",
          "Thalis"
        ],
        "avgRating": 3.8,
        "parentId": "637",
        "avgRatingString": "3.8",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mehfil-l-block-sector-11-delhi-12912",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "608589",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Pandav Nagar",
        "areaName": "Mayur Vihar Phase 1",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-05 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-pandav-nagar-mayur-vihar-phase-1-delhi-608589",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "622567",
        "name": "UBQ by Barbeque Nation",
        "cloudinaryImageId": "qxq42n8xxlydk0o6p0hx",
        "locality": "V3S Mall",
        "areaName": "Laxmi Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.5,
        "parentId": "10804",
        "avgRatingString": "3.5",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-v3s-mall-laxmi-nagar-delhi-622567",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "581572",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Gandhi Nagar",
        "areaName": "Pandav Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "parentId": "1776",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 23:01:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chinese.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wow-momo-gandhi-nagar-pandav-nagar-delhi-581572",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "701718",
        "name": "BOOM Sandwich - Sub of India",
        "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
        "locality": "Pandav Nagar Road",
        "areaName": "Mayur Vihar Phase1",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Snacks",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "401169",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "17-27 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-05 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-pandav-nagar-road-mayur-vihar-phase1-delhi-701718",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "622566",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "u1ogaoytsj6ddc624mw0",
        "locality": "V3S Mall",
        "areaName": "Laxmi Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.3,
        "parentId": "2438",
        "avgRatingString": "3.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/barbeque-nation-v3s-mall-laxmi-nagar-delhi-622566",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "680966",
        "name": "Chicago Pizza",
        "cloudinaryImageId": "6e9108477d82d8492e0d0af2bc066946",
        "locality": "V3S East Centre",
        "areaName": "Laxmi Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.8,
        "parentId": "60277",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chicago-pizza-v3s-east-centre-laxmi-nagar-delhi-680966",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "707692",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Phase 1",
        "areaName": "Mayur Vihar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-05 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9233b929-e6c7-45bf-8f96-b3d701a722e9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-phase-1-mayur-vihar-delhi-707692",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

//props property
const RestaurentCard = (props) =>{
    const{resData} = props;
    const{name,locality,cuisines,areaName,costForTwo} = resData.info;
    // console.log(resList[0].info.name);
    return(
        <div className="res-card" style={styleCard}>
           <img className="food_logo" alt="food logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
           <h5>Restaurent Name:{name}</h5>
           <h5>locality:{locality}</h5>
           <h5>cuisines:{cuisines[0]}</h5>
           <h5>Area Name:{areaName}</h5>
           <h5>cost For Two:{costForTwo}</h5>
           
           
           
           
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">

                {/* <RestaurentCard resData={resList[0]}/>
                <RestaurentCard resData={resList[1]}/>
                <RestaurentCard resData={resList[2]}/>
                <RestaurentCard resData={resList[3]}/> */}
                

                {/* map function */}
                {
                    resList.map((restaurent1) =>(
                        <RestaurentCard key={restaurent1.info.id} resData={restaurent1} />
                    ))
                }
                
                
                
                
            </div>
        </div>
    )
}




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