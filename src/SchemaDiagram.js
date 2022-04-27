import React from "react";
import { useState } from "react";
import CarryOutWorkClientsSchema from "./carryOutWorkClientsSchema";
import schema1 from "./Resources/schema1.png"
import schema2 from "./Resources/schema2.png"
import schema3 from "./Resources/schema3.png"
import schema4 from "./Resources/schema4.png"
import schema5 from "./Resources/schema5.png"
import ServiceAndGovernSchema from "./serviceAndGovernSchema";

function SchemaDiagram ({selectedSchema, handleRenderChange}) {

    function getSchema(selectedSchema){
        if (selectedSchema == 1){
            return (schema1)
        }
        if (selectedSchema == 2){
            return (schema2)
        }
        if (selectedSchema == 3){
            return (schema3)
        }
        if (selectedSchema == 4){
            return (<CarryOutWorkClientsSchema></CarryOutWorkClientsSchema>)
        }
        if (selectedSchema == 5){
            return (<ServiceAndGovernSchema></ServiceAndGovernSchema>)
        }

    }

     return (
        <div>
            <br></br>
            {/* <img src={getSchema(selectedSchema)}></img> */}
            <div>{getSchema(selectedSchema)}</div>
            <button onClick={() => handleRenderChange("Main Diagram")}>Back</button>
        </div>
        
    )

}

export default SchemaDiagram;