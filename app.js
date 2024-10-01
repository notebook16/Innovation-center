//<<<<--------------------------------------------------------- requires ----------------------------------------------------------------------

    const express = require("express");
    const app  = express();

    //<----databse requiring block

    //---->

    //npm i method-override for overriding put and post requests
    const methodOverride = require("method-override");

    //npm i ejs for ejs partial code like bolerplates
    const ejsMate = require("ejs-mate");

    //for resolving directory reaching using built node.js
    const path = require("path");

    //<--  error handeling (client side) and (server side)
     
    const ExpressEroor = require("./utils/ExpressError.js")

    //--->


//-------------------------------------------------------------------------------------------------------------------------------------->>>





//<-- database connection block 


//-->







//<--------------------------------------------------------- middlewares block --------------------------------------------

    //view engine for ejs rendering
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));

    //for parsing form submiting data
    app.use(express.urlencoded({extended: true}))

    //for method-ovveride
    app.use(methodOverride("_method"));

    //ejs-mate package
    app.engine('ejs', ejsMate);

    //to load static files
    app.use(express.static(path.join(__dirname,"/public")))


//------------------------------------------------------------------------------------------------------------------->    


//<-- form validation for server side block


//-->>


//root route
app.get('/', (req, res) => {
    res.render("renders/index.ejs" , { showFooter: false });
});

//home route
app.get('/home', (req, res) => {
    res.render("renders/index.ejs" , { showFooter: false });
});


//repo route
app.get("/Repository", (req,res) => {
    res.render("renders/repo.ejs", { showFooter: true})
});

//gallery route
app.get("/gallery" , (req,res) => {
    res.render("renders/gallery.ejs" , { showFooter: true})
})

//proposal route
app.get("/proposal" , (req,res) => {
    res.render("renders/proposal.ejs" , { showFooter: true})
})

//about route
app.get("/about" , (req,res) => {
    res.render("renders/about.ejs", { showFooter: true})
})

//feedback route
app.get("/feedback" ,(req,res) => {
    res.render("renders/feedback.ejs" , { showFooter: true})
})


app.get("/gallery/tech-23" ,(req,res) => {
    res.render("renders/tech-23.ejs" , { showFooter: true})
})

app.get("/gallery/tech-24" ,(req,res) => {
    res.render("renders/tech-24.ejs" , { showFooter: true})
})



//error handeling APIs

//this is for the error when you go for some wrong route
//the "app.all("*") will get the all incoming call if it doesn't match from above
//then it will through the "userdefined" ExpressError and the next block will catch it

app.get('/favicon.ico', (req, res) => {
    res.status(204).send(); // Send a No Content status
});

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
  });
  

//the below function is for error handeling whatever the error is either form error or wrong rote error
//all the error will come here  
  app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).send(message);
  });




  
app.listen(8080, () => {
    console.log("sever is listining")
})