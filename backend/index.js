const express = require ("express")
const app = express()
const cors = require ("cors")
const port = 5000
const heroes = require ("./routes/heroes")
const morgan = require("morgan")

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/heroes', heroes)




app.listen(port, () => {
    console.log(`Server running on port ${port}`)

  })