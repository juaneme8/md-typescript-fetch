import './App.css'
import api from './api'
import { useEffect, useState } from 'react'
import { Gift } from "./types";

function App() {
  const [gifts, setGifts] = useState<Gift[]>([])
  
  useEffect(() => {
    api.gifts.list().then(gifts=> setGifts(gifts))
  }, [])


  // console.log(gifts)

  return (
    <>
      {gifts.length>0 && gifts.map(gift => (
        <div key={gift.id}>
          <img src={gift.image} alt={gift.text} />
          <p>{gift.text}</p>
          <p>{gift.owner}</p>
          <p>{gift.count}</p>
        </div>
      ))}
    </>
  );
}

export default App
