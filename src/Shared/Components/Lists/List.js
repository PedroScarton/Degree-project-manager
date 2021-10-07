import React from "react";

import "./List.css"

const List=(props)=>{
    return(
        <div className="list-_grid-template">
            {props.children}
        </div>
    );
}

export default List;