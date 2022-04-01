const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));



app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
