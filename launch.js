// get input
// get request using node
// dump data to html or json file
// launch page from node
// log.txt


var prompt = require('prompt');
var request = require('request');
const moment = require('moment');
var fs = require('fs');
var open = require('open');

var now = moment();

prompt.start();

prompt.get(['url'], function(err,result) {

  var queryURL = result.url;

  request(queryURL, function (error, response, body) {

    if (!error && response.statusCode == 200) {
     var data = body;

      console.log(data);

      fs.writeFile("test.json", data, 
        function(err){
    
        if(err){
          console.log(err);
        }
        else {
          console.log("File written");
          fs.appendFile("log.txt", now.format("MMM DD, YYYY @ hh:mm:ss A") + " " + queryURL + "\n", function(err){
            if(err){
              console.log(err);
            }
            else {
              console.log("Launching file");
            }
          })
          open("test.json", function(err){
            if(err){
              console.log(err);
            }
            else {
              console.log("Launching file");
            }
          });

        }

      });// end of writefile test
    };
  });
})
