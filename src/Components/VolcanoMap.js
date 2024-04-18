import React from "react"
import { Map, Marker } from "pigeon-maps"

const VolcanoMap = ({ lat, lng }) => {


    return (
        <Map height={300} defaultCenter={[Number(lat), Number(lng)]} defaultZoom={4}>
            <Marker width={50} anchor={[Number(lat), Number(lng)]} />
        </Map>
    );
}

export default VolcanoMap;