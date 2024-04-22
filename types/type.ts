export type dataItem = {
    id:number
    artist:string
    bodyText:string
    cardNum:number
    color:string
    cost:number
    flavorText:string
    image:string
    inkable:boolean
    name:string
    rarity:string
    setId:string
    setName:string
    setNum:number
    type:string
    lore: number,
    strength: number,
    classifications: string,
    willpower: number,
    moveCost: number,
    abilities: string,
    cardVariants: string | number,
    createdAt: string,
    updatedAt: string
  }

export type deckItem={
  id:number
  name:string
  user_id: number
  createdAt: string,
  updatedAt: string
}

export type DeckCard = {
  deck: { name:string ; cards:Array<{ cards: dataItem }>}
}

