const express = require('express')
const app = express()
const port = 8383
var MongoClient = require('mongodb').MongoClient;


const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
    try {
      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Psychologists_Info");
        dbo.collection("Info_doc").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
      // let key = "apple";
      // window.localStorage.setItem("key",key);
    } finally {
      await client.close();
    }
  }
  run();
  
  //let Online = document.getElementById("on");
  //Online.addEventListener("click", function (event) {
   //run();
  //});
 
app.use(express.static('public'))

app.get('/',(req, res) => {
    res.status(200).send('<h1>Loading</h1>')
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))

module.exports = run;
