const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"this is h1 tag from child1"),
        React.createElement("h2",{},"this is h2 tag from child1")
       ]
      
       ),
       React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"this is h1 tag from child2"),
        React.createElement("h2",{},"this is h2 tag from child2")
       ]
      
       )
]
               
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);