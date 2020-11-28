const express = require('express');
const peer = process.env.PEER;

var app = express();
//var app1 = express();

app.get('/pingpong/', function(req, res) {
//  game_start=1
//  const fork = require ('child_process').fork;

//fork func ping &
  res.send('Number of iterations ' + req.query.iterations);

});

/* func ping  (iterations) {
for (i=0, i <iterations; i++)
{ print ping 
  call http endpoing ping of the PEER and wait for response (print)

}
pring game Over
} */


//tell express what to do when the / route is requested
//app1.get('/ping', function(req, res) {
//  console.log('pong');
//  res.send (epmty);
//)};
//  var i = 1,
//    max = 5; //req.query.iterations;

app.get('/ping/', function(req, res) {
  console.log('pong');
  console.log(peer);
  });

/*   client.get('visits', (err, visits) => {
  //send multiple responses to the client
//    for (; i <= max; i++) {
      res.send('Number of visits ' + visits);
      client.set('visits', parseInt(visits) + 1);
 //   }
  }); */

  //end the response process
//  res.end();
//});

/* app.get('/', function(req, res) {
client.get('visits', (err, visits) => {
  res.send('Number of visits ' + visits);
  client.set('visits', parseInt(visits) + 1);
});
}); */

app.listen(4000, () => {
  console.log('listening on port 4000');
});
