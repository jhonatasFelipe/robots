import React, { useEffect, useState } from "react";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { Button, Modal } from "@mui/material";
import Informations from "../infomations/index.js";

const Map = ({robots})=>{

    const [selectedRobot, setRobotSelected] =  useState(null);
    const [open, setOpen] =  useState(false);
   
    const getLat = (robot) => {
        return robot.address.coordinates.lat;
    }

    const getLong = (robot) => {
        return robot.address.coordinates.lng;
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

    return(
        <>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} style={{ width: "100%", height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            robots &&
            robots.map((robot)=>(
                <Marker position={[getLat(robot), getLong(robot)]}>
                <Popup>
                    <p>{ robot.first_name } { robot.last_name }</p>
                  <img src={robot.avatar}/>
                  <Button onClick={()=>{selectingRobot(robot.id)}} >Informações</Button>
                </Popup>
                
              </Marker>
            ))
        }
        </MapContainer>
        {
            <Modal open={open}>
                <Informations robot={selectedRobot} close={closeModal}></Informations>
            </Modal>
        }
        
      </>
    );
}

export default Map;