import { useMapEvent } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from 'react';
import { Button, Image, Flex, Textarea, FileButton, Box, Heading, IconButton } from "@yamada-ui/react";
import {uploadStorage} from "../firebase/strorage";
import { FaImage } from "react-icons/fa";

export const ClickEvent = () =>{
  let loc = new L.LatLng(0,0);
  const [latlng, setLatlng] = useState<L.LatLng>(loc);
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState("vite.svg")
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);

  useEffect(()=>{
    console.log(latlng);
  },[latlng])

  const getImage = (e: File[] | undefined) => {
    if (e == undefined) return;

    const img: File = e[0];
    setImage(img);
    setPreviewImage(window.URL.createObjectURL(img));
  }

  const submit = () => {
    if(latlng && text && image && !submited)
    {
      console.log(
        "latlng: " +  latlng,
        "image: " + image,
        "text: " + text
      );
      uploadStorage(image, {lat: latlng.lat, lng: latlng.lng, details: text});
      setSubmited(true);
      alert("送信が完了しました。");
    }else{
      if(!text) alert("詳細が入力されていません。");
    }
  }


  const map = useMapEvent("click", (location) => {
    if (!clicked) {
      setClicked(true);
      setLatlng(location.latlng);

      const marker = L.marker([location.latlng.lat, location.latlng.lng], {
        draggable: true,
      })
        .addTo(map)
        .on("click", function () {
          marker.bindPopup('<Box>新規登録する場所</Box>', {
            maxWidth: 200,
          })
        });

      marker.on('moveend', (e) => {
        if (e.target._latlng.lat != undefined && e.target._latlng != undefined) {
          const lat: number = e.target._latlng.lat;
          const lng: number = e.target._latlng.lng;
          const pos = new L.LatLng(lat, lng);
          setLatlng(pos);
        }

      });
      marker.on('dblclick', (e) => {
        console.log(e);
        marker.remove();
        setClicked(false);
        setSubmited(false);
      })
      marker.on('contextmenu', (e) => {
        console.log(e);
        marker.remove();
        setClicked(false);
        setSubmited(false);
      })
    }
  });

  return (
    <Box id="post" position="absolute" display={ clicked ? "inline-block" : "none" } zIndex={10000} top={30} left={60} width="35vw" height="60vh" backgroundColor="white" borderRadius={10} padding={10} boxShadow="lg">
      <Heading as="h1" fontSize="xl"> 投稿内容</Heading>
      <Box mb={5}>
        <Heading as="h2" fontSize="lg">投稿画像</Heading>
        <FileButton as={IconButton} icon={<FaImage/>} onChange={(e)=>getImage(e)} />
      </Box>
      <Box mb={5}>
        <Image src={previewImage} maxWidth={"30vw"} minWidth={50} maxHeight={"20vh"} minHeight={50} />
      </Box>
      <Box mb={5}>
        <Heading as="h2" fontSize="lg">詳細情報</Heading>
        <Textarea w="full" variant="filled" rows={4} id="details" onChange={(e) => {console.log(e.target.value); setText(e.target.value) }} />
      </Box>
      <Flex gap={4}  mb={5} textAlign={"center"}>
        <Button colorScheme="primary" variant="solid" onClick={submit} >送信</Button>
        
        <Button colorScheme="primary" variant="solid" onClick={()=>{setClicked(false)}}>閉じる</Button>
      </Flex>
    </Box >
  );

}