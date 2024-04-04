import React from "react";
import ReactDOM from "react-dom/client";


const Tittle= () => {
    return(
        <h1>this is tittle component</h1>
    )
}

const HeadingComponent = () => {
    return(
        <div>
         <Tittle />
        <h1>hello mayank singh</h1>
        </div>

        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);