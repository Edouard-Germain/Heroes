import { createContext, useState, useEffect } from "react"

const HeroesContext = createContext({})
const HeroesContextProvider = props=> {
    const [heroesList, setHeroesList] = useState(null)

    const value = {
        heroesList,
        setHeroesList
      }
    
    console.log('value',value)
    useEffect(() => {
        fetch('http://localhost:5000/heroes')
          .then(response => response.json())
          .then(data => setHeroesList(data))
      },[])

      return (
        <HeroesContext.Provider value={value}>
          {props.children}
        </HeroesContext.Provider>
      )   
}

export  {
    HeroesContext,
    HeroesContextProvider
} 
