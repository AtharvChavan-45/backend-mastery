const express = require('express');
// load express module from node_modules
// express is a function you call to create an app
// require() is nodes commonjs import
const app = express();
// calls the express() function to create an Express appliction instance and stores it an app
// app provides method like .get,.post,.use,.listen to define routes and middleware.
require('dotenv').config();
//loads the dotenv package and immediatly calls config() to read a env file  (If present)
// and put the variables into process.env.
// useful for keeping secret or environment specific settings db urls.
const PORT=process.env.PORT || 3000;
// read the port environment variables from process.env
// this pattern allows the server to use a host-provide port in production and default to 3000 in development.

app.use(express.json());
// it helps express app understand JSON data that comes from the client
// app.use() is used to add middleware
// what  is middleware? something that runs before your route.

// Middleware
app.use((req, res, next) => {
 console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
 next();
});
// every time someone hits your api this function runs before your actual route.
// req -> what user sends
// res -> what you will send back
// next() ->  move to the next step (next middleware or route)

app.get('/',(req,res)=>{
    res.JSON({
        message:'this is the root folder',
        url:req.url,
        method:req.method
    })
})
// req = the incoming request object
// res = the response object (method to send data)
// res.json({}) serializes the provided object json

function Homepage(req,res){
    res.JSON({
        message:'this is home page',
        url:req.url,
        method:req.method
    })

}
//her we first make function then call it by get method 

app.get('/home',Homepage);

app.get('/users/:id',(req,res)=>{
    res.JSON({
        userid:req.params.id,
        url:req.url,
        method:req.method
    })
})
// when a request matches (e.g./users/42), express extracts id and put it on 
//req.params.id=='42'

// POST
app.post('/users', (req, res) => {
 const { name } = req.body;
 res.status(201).json({ message: `User ${name} created.` });
});

// Error Handling Middleware
app.use((req, res) => {
 res.status(404).json({ error: 'Not Found' });
});


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})

//app.listen(port,callback) starts the http server and begins listening on the specified port


