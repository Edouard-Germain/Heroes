const express = require("express")
let heroes = require("../heroeslist.json")
const app = express()

/// MIdlle ware

const checkExistingHero = (req,res,next)=> {
    const {slug} = req.params
    const hero = heroes.find(hero => hero.slug === slug)
    if (!hero) {
        res.status(404).send("Not found")
        res.json("hero not found ")
      } else {
        next()
      }   
}

const validateHero = (req,res,next) => {
    // const {slug} = req.params
    const heroTemplate = {
        slug : "hero.slug",
        name : "hero.name",
        power : "powerUpdate",
        color: "hero.color",
        isAlive : "true",
        age : "hero.age",
        image : "hero.image"

    }
    let hero = req.body
    let checkHero = Object.keys(hero).toString()
    console.log("check hero", checkHero)
    let checkHeroTemplate = Object.keys(heroTemplate).toString()
    console.log('checkHeroTemplate', checkHeroTemplate)


    if (checkHero === checkHeroTemplate){
        next 
    }else {
        res.status(404).send("Not found")

    }
}

/////////////////////////////////////////
app.get('/', (req,res) => {
    res.json(heroes)})

app.get('/:slug',(req,res) => {
    const {slug} = req.params
    const hero = heroes.find(hero => hero.slug === slug)
    res.json(hero)
})
app.get('/:slug/powers',(req,res)=>{
    const {slug} = req.params
    const hero = heroes.find(hero => hero.slug === slug)
    const powers = hero.power
    console.log(powers)
    res.json(powers)
})

app.put('/:slug/powers',(req,res)=>{
    const {slug} = req.params
    let hero = heroes.find(hero => hero.slug === slug)
    console.log("hero", hero)
    let heroUpdate = hero.power
    console.log("heroUpdate", heroUpdate)
    let newPower = req.body
   let  powerUpdate = [
          ...heroUpdate, newPower
        ]
    console.log("powerUpdate",powerUpdate)
    hero = {slug: hero.slug,
        name : hero.name,
        power : powerUpdate,
        color: hero.color,
        age : hero.age,
        image : hero.image
        
    }
    res.json(hero) 
})

app.post('/',(req,res)=>{
    const newHero = {
       ... req.body
    }
    heroes = [ ...heroes,newHero]
    res.json(heroes)
})

app.delete('/:slug',checkExistingHero,  (req,res)=>{
    const {slug} = req.params;    
    let heroDelette = heroes
    let hero = heroDelette.find(hero=> hero.slug == slug) 
    let heroesFilter = heroDelette.filter(herout => herout != hero)
    heroes = heroesFilter
    // res.json(heroes)   
    res.json(`${hero.slug} effacé`)
})

app.delete('/:slug/power/:power', (req,res)=>{
    const {slug,power}= req.params
    let hero = heroes.find(hero => hero.slug === slug)
    let heropowers = hero.power
    let powerfind = heropowers.find(powerList => powerName  === power )

})

app.put('/:slug/',(req,res)=>{
    const {slug} = req.params;    
    let hero = heroes.find(hero => hero.slug === slug)
    let heroUpdate = req.body
    console.log("heroUpdate", heroUpdate)
    hero = heroUpdate
    res.json(hero)
})



module.exports = app
