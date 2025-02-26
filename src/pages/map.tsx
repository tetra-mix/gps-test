
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLng } from "leaflet";
import { ForLoadMaker } from '../components/ForLoadMaker';
import { Button,Text } from '@yamada-ui/react';
import "leaflet/dist/leaflet.css";
import { LoadMarker } from '../components/LoadMarker';


const Map = ()=> {
    const position = new LatLng(51.47699329882074, -0.00047874473041221245);

    return (
        <MapContainer center={position} zoom={3}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ForLoadMaker />
            <Button as="a" href="/gps-test/form/"  colorScheme="primary" zIndex="1000" position="absolute" top="0" right="0">
                <Text color="whiteAlpha.900">フォーム</Text>
            </Button>
            <LoadMarker />
        </MapContainer>
    )
}

export default Map;