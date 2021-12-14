import {Link} from 'react-router-dom'


const HeroCard =(props)=>{
    return( 
    <div>
        <Link to= {`/heroes/:$`}>
        <h2>{props.hero.name}</h2>
        </Link>
        <h3>{props.hero.age}</h3>
        <div>{props.hero.power.map((power)=><p>{power}</p>)}</div>
        <div>

        </div>
    </div>
    )
}
export default HeroCard