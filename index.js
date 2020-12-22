const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname +"/date.js")
const items = ["Buy Food", "Cook Food", "Eat Food"]
const workItems = [];

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  var day = date.GetDay();



    res.render('list', { ListTitle: day, newListItems: items })

})

app.post('/', (req, res) => {
    var item = req.body.todo

    if(req.body.list=='WorkList'){
        workItems.push(item)
        res.redirect('/work')

    }else{
       items.push(item)
       res.redirect('/') 
    }
  

  
})

app.get('/about',(req,res)=>{
res.render('about')
})
app.get('/work', (req, res) => {
    res.render('list', { ListTitle: 'WorkList', newListItems: workItems })

})
app.post('/work', (req, res) => {
    var item = req.body.todo
    workItems.push(item)

})

app.listen(3000, () => {
    console.log('App is running on port 3000')
})