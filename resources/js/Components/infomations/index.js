import { Button } from "@mui/material";
import React from "react";


const Informations = ({robot, close})=>{
    return(
        <div className='container-information'>
            <img src={robot.avatar}/>
            <p>Nome completo : {robot.first_name} {robot.last_name}</p>
            <p>E-mail : {robot.email}</p>
            <p>Nascimento: {robot.date_of_birth}</p>
            <p>Cargo: {robot.employment.title}</p>
            <Button onClick={close}>Fechar</Button>
        </div>
    )
}

export default Informations;