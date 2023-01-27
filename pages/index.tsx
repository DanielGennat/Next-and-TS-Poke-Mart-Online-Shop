import { useEffect, useState } from "react";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
// import ItemList from "./components/ItemList";


export default function Home() {
  const pokeapiURL:string = "https://pokeapi.co/api/v2/item/";

  /* interface IAllItems {
    name: string;
    url: string;
  } []; */
  const [allItems, setAllItems] = useState([{name:"", url:""}]);

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
      <div>
        <ItemCard />
      </div>
      {/* <ItemList pokeapiURL={pokeapiURL} /> */}
      {/* <ItemList allItems={allItems} /> */}
      {allItems.map((item) => {
            return ( <div key={item.name}>{item.name}</div>);
            })
        }
    </>
  )
}