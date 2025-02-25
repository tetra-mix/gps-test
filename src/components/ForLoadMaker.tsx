import { useState } from 'react';
import { colorMarker } from './maker';
import { Marker} from "react-leaflet";

export const ForLoadMaker = () => {
    const [isOk ] = useState(false);

    return (
            isOk ? <Marker position={{ lat: 0, lng: 0 }} icon={colorMarker("red")} /> : <></>
    );
}