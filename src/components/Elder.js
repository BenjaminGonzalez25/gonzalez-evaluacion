import React, {useState, useEffect} from "react"
import Lily from "../assets/images/ender-lily.jpg"
import Guardiana from "../assets/images/guardiana-ender.png"
import Comandante from "../assets/images/comandante-elden.jpg"
import ElderFragment from "./Fragments/ElderFragment"
import "../components/Fragments/Elder.css"


const Elder = () => { 

    return ( 
        <> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Ender lilies!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ElderFragment
                            textoDescripcion="Una doncella que debera cargar con el mal que asola su mundo como decendiente directa de una importante sacerdotisa su deber es purificar las almas corrompidas."
                            imagen={Lily}
                            Titulo="Lily"
                            Reliquia="Reliquia: Doncella Blanca"
                            textoDescripcionRe="Reliquia que te ayuda curarte."
                            />
                    
                    </div>  
                    <div className="col-4">
                        <ElderFragment
                            textoDescripcion="Silva se convirtio en guardiana para proteger a su amada hermana. Asumio la responsabilidad de proteger a la sacerdotisa."
                            imagen={Guardiana}
                            Titulo="Guardiana Silva"
                            Reliquia="Reliquia: Rosario Corrompido"
                            textoDescripcionRe="Aumento de poder de golpes."
                            />
                        
                    </div>
                    <div className="col-4">
                        <ElderFragment
                            textoDescripcion="Julius era hijo ilegitimo del rey,con un caracter severo que lo llevo a esforzarse para convertirse en lider de los caballeros."
                            imagen={Comandante}
                            Titulo="Comandante Julius"
                            Reliquia="Reliquia: Emblema de escudos reales"
                            textoDescripcionRe="Mayor proteccion."
                            />
                         
                    </div> 
                </div>
            </div>

        </>
    )

}

export default Elder