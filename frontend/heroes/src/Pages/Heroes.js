import  { useContext } from 'react'
import { HeroesContext } from "../context/Context"
import HeroCard from "../components/HeroCard"
const Heroes = () => { 
    const {heroesList} = useContext(HeroesContext)
    console.log("heroes",heroesList)

    if ( heroesList == null){
        return null
    }else {

    return(
        
            <ul>
                {heroesList.map((hero) =><HeroCard hero = {hero}/>)}    
            </ul>

    )
    }
}
export default Heroes 