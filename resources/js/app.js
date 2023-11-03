import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import List from "./Components/List/index.js";
import { getRobots } from "./Services/users.js";
import Card from "./Components/Card/index.js";
import Map from "./Components/Map/index.js";
import { ButtonGroup, Button } from "@mui/material";
import{ Modal} from "@mui/material";
import Informations from "./Components/infomations/index.js";



const App = () => {

    const [robots, setRobots] = useState([]);
    const [previewMode, setPreviewMode] = useState('map');
    const [selectedRobot, setRobotSelected] =  useState(null);
    const [open, setOpen] =  useState(false);
    const previewModes = ['map', 'grid', 'list'];

    const getData = async()=>{
        const { data } = await getRobots(100);
        setRobots(data);
    }

    const changePreviewMode = (indexMod)=>{
        setPreviewMode(previewModes[indexMod]);
    }

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
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={()=>{changePreviewMode(0)}}>Modo Mapa</Button>
                <Button onClick={()=>{changePreviewMode(1)}}>Modo Grade</Button>
                <Button onClick={()=>{changePreviewMode(2)}}>Modo Lista</Button>
            </ButtonGroup>
        {

            previewMode === 'grid' &&
            <>
                <div className="container-cards" >
                    {
                    robots && robots.map( robot => (
                    <div onClick={()=>{selectingRobot(robot.id)}}>
                        <Card robot={robot} />
                    </div>
                    
                    ))
                }
                </div>
                <Modal open={open}>
                    <Informations robot={selectedRobot} close={closeModal}></Informations>
                </Modal>
            </>

        }
        { 
            previewMode === 'map' &&
            robots && <Map robots={robots}/>
        }
        {
            previewMode === 'list' &&
            robots && <List robots={robots}/>
        }
            
        </>
       
    )
}

let element = document.getElementById("react");
console.log(element);
ReactDOM.render(<App />, element);


