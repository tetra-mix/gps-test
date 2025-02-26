import { useEffect, useState } from "react";
import { Object } from "../types/object";
import { Polyline } from "react-leaflet";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const LoadMarker = () => {

  const [data, setData] = useState<Object[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData");
      const collectionRef = collection(db, "data");
      const collectionSnapshot = await getDocs(collectionRef);
      const docsId = collectionSnapshot.docs.map(doc => {
        console.log("doc.id", doc.id);
        return doc.id;
      });
      console.log("docsId", docsId);
      const docs = await Promise.all(docsId.map(async (id) => {
        const docRef = collection(db, "data", id, "log");
        const docSnapshot = await getDocs(docRef);
        const docData = docSnapshot.docs.map(doc => doc.data());
        return docData;
      }));
      console.log("docs", docs);
      setData(docs as Object[][]);
      console.log("finish");
    }

    fetchData();
    
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <>
      {data.map((item, i) => {
        return <Polyline key={i} pathOptions={{ color: 'red' }} positions={item} />
      })}
    </>
  );

}