import { Gift } from "./types";

export default {
  gifts: {
    list: async():Promise<Gift[]> => {
      const beers = await fetch("https://api.punkapi.com/v2/beers").then(res => res.json());
      
      return beers.slice(0,3).map((beer:any) => ({
        id: beer.id,
          text: beer.name,
          image: beer.image_url,
          count: beer.abv,
          owner: "Juancho",
      }));
    }
    
  }
}