import React,{useState} from "react";
import { Modal } from "@mui/material";
import Informations from "../infomations/index.js";

const List = ({robots}) => {

    const [selectedRobot, setRobotSelected] =  useState(null);
    const [open, setOpen] =  useState(false);

    const selectingRobot = (id) => {
        setRobotSelected(robots.find(robot => robot.id === id));
        setOpen(true);
    }

    const clearSelection = () => {
        setRobotSelected(null);
    }

    const closeModal = () =>{
        setOpen(false);
        clearSelection();
    }
    return(<>
        {
            robots &&
            robots.map((robot)=>(
                <div className="listItem" onClick={()=>{selectingRobot(robot.id)}}>
                    <img src={robot.avatar}/>
                    <h3>{robot.first_name} {robot.last_name}</h3>

                </div>
            ))
        }
        {
            <Modal open={open}>
                <Informations robot={selectedRobot} close={closeModal}></Informations>
            </Modal>
        }
       </> 
    )
    
}

export default List;