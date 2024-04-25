import { dataItem } from "@/types/type";

export function slugify(slug:string){

  return String(slug)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') 
    .trim() 
    .toLowerCase() 
    .replace(/[^a-z0-9 -]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-')
}
export function sortDecksByCreation(from:string, decks:dataItem[]){
  let newDecks
  if(from === "asc"){
    newDecks = [...decks].sort(
      (a: dataItem, b: dataItem) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }else{    
    newDecks = [...decks].sort(
      (a: dataItem, b: dataItem) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  return newDecks;
}
