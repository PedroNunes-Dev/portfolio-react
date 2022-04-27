import React from "react";
import Techs from '../../data/Techs';
import { StyledTecnologies} from "./tecnologiesStyled";

const Tecnologies = ()  => {
    
    return(

        <StyledTecnologies>
            <div className="container">
                <h2 className="title">Tecnologias</h2>
                <section>
                    {Techs.map((tech) => (

                        <div className="techIcons" key={tech.text}>
                            <div className="icon">{tech.Icon}</div>
                            <p>{tech.text}</p>

                        </div>
                        
                    ))}
                </section>
            </div>
        </StyledTecnologies>

    )

}

export default Tecnologies;