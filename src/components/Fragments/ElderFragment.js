import React, {useState, useEffect} from "react"
import "./Elder.css"

const ElderFragment = ({imagen,Titulo,textoDescripcion,Reliquia,textoDescripcionRe}) => { 

    return ( 
        <>
           <div className="card" style={{width: "18rem"}}>
                            <img src={imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{Titulo}</h5>
                                    <p className="card-text">{textoDescripcion}</p>
                                    <h5 className="card-title">{Reliquia}</h5>
                                    <p className="card-text">{textoDescripcionRe}</p>
                                    
                            </div>
                        </div>  
        </>
    )
  }

export default ElderFragment