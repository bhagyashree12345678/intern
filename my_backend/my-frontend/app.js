const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const path = require("path");
// const { INSPECT_MAX_BYTES } = require("buffer");

app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb://localhost:27017/reactDB", {useNewUrlParser: true}, );

app.get("/", function(req,res){
   res.render("")
})


app.listen(3000, () => console.log("Server listening on port 3000."));