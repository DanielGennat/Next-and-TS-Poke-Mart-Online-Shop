import { use } from "react"

async function getItems() {
    return await (await fetch("https://pokeapi.co/api/v2/item/")).json()
}

const allItems = use(getItems())