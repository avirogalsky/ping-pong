const express = require('express')
const http = require('http')

const apiApp = express()
const pingApp = express()

const apiPort = 4000
const pingPort = 5000
const peer = process.env.PEER

apiApp.get('/pingpong', (req, res) => {
  let iterations=req.query.iterations
  ping(1, iterations, Date.now())
  res.send('started ping pong');
})

apiApp.listen(apiPort, () => {
  console.log(`API app listening`)
})

pingApp.get('/ping', (req, res) => {
  console.log(`${Date.now()} pong ${req.query.iteration}`)
  res.send('pong')
})
  
pingApp.listen(pingPort, () => {
console.log(`Ping app listening`)
})

function ping(currentIteration ,totalIterations, gameStartTime) {
  let startTimeInMillis = Date.now();
  console.log(`${Date.now()} ping ${currentIteration}`)

  callback = function(response) {
    response.on('data', function (chunk) {
    });

    response.on('end', function () {
      iterationTime = Date.now() - startTimeInMillis;
      console.log(`${Date.now()} iteration ${currentIteration} done, took ${iterationTime} milliseconds`);
      if (currentIteration == totalIterations) {
        gameTotalTime = Date.now() - gameStartTime;
        console.log(`${Date.now()} Game Over, took ${gameTotalTime} ms`);
      } else {
        ping (currentIteration + 1, totalIterations, gameStartTime);
      }
    });
  }

  const options = {
    hostname: peer,
    port: pingPort,
    secure:false,
    path: `/ping?iteration=${currentIteration}`,
    method: 'GET'
  }

  const req = http.request(options, callback);

  req.on('error', error => {
    console.error(error)
  })

  req.end();
}