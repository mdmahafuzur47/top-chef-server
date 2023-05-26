const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const chefData = require('./data/chefData.json')
const chefRecipes = require('./data/recipes.json')

app.get('/',(req,res)=>{
    res.send("Express Home Page!!!!")
})
// total chef Data 
app.get('/chefInfo', (req,res)=>{
    res.send(chefData)
})
// Single Chef Data 
app.get('/chefInfo/:id', (req,res) => {
    const id = req.params.id;
    const singleData = chefData.find(data => data.id === parseInt(id))
    res.send(singleData)
})

// Chef Recipes 
app.get('/chefRecipes/:id',(req,res)=>{
    const id = req.params.id;
    const recipes = chefRecipes.find(cR => cR.id === parseInt(id))
    res.send(recipes);
})



app.listen(port, () => {
    console.log("Lisening on port ", port);
})