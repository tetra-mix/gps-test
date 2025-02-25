"use client";
import { MapContainer, TileLayer } from 'react-leaflet';
import { Icon, Text } from '@yamada-ui/react';
import { FaHome } from 'react-icons/fa';
import { LoadMarker } from './LoadMarker';
import { SearchBox } from './SearchBox';
import { CircleButton } from './CircleButton';
import { LatLng } from "leaflet";
import { ClickEvent } from './ClickEvent';
import { ForLoadMaker } from './ForLoadMaker';
import "leaflet/dist/leaflet.css";


export const Map = () => {
    const position = new LatLng(51.47699329882074, -0.00047874473041221245);
    const pushed = () => { console.log("pushed") }

    return (
        <MapContainer center={position} zoom={3}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ForLoadMaker />
            <LoadMarker />
            <ClickEvent />
            <SearchBox />
            {
                <CircleButton
                    func={pushed}
                    bottom={100}
                    right={100}
                >
                    <Icon as={FaHome} fontSize={35} p={0} m={0}/>
                    <Text p={0} m={0} >Home</Text>
                </CircleButton>

            }
            
        </MapContainer>
    )
}

export default Map