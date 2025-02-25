import { useEffect, useState } from "react";
import { Image, Text } from "@yamada-ui/react";
import { ObjectF } from "../types/object";
import { Marker, Popup } from "react-leaflet";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export const LoadMarker = ()=> {

  const [data, setData] = useState<ObjectF[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "data");
      const collectionSnapshot = await getDocs(collectionRef);
      const docs = collectionSnapshot.docs.map(doc => doc.data());     
      setData(docs as ObjectF[]);
    }

    fetchData();
  },[]);
  

  return (
    <>
      {data.map((d, index) => {
        return (
          <Marker
            key={index}
            position={{ lat: d.lat, lng: d.lng }}
          >
            <Popup>
              <Image src={d.URL} maxWidth={"30vw"} minWidth={50} maxHeight={"20vh"} minHeight={50} />
              <Text>{d.details}</Text>
            </Popup>
          </Marker>
        );
      })}
    </>
  );

}