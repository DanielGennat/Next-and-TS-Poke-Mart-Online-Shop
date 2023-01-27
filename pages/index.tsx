import { useEffect, useState } from "react";
import Header from "./components/Header";


export default function Home() {
  const pokeapiURL:string = "https://pokeapi.co/api/v2/item/";

  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch(pokeapiURL)
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data.results);
      })
      .catch((error) => console.error(error));
  }, [pokeapiURL]);

  console.log(allItems);
  
  return (
    <>
      <Header />
    </>
  )
}
