const express = require('express')
const https = require('http')

const apiApp = express()
const pingApp = express()

const apiPort = process.env.API_PORT
const myPingPort = process.env.MY_PING_PORT
const otherPingPort = process.env.OTHER_PONG_PORT

apiApp.get('/pingpong', (req, res) => {
  let iterations=req.query.iterations
  ping(1, iterations, Date.now())
  res.send('started ping pong');
})

apiApp.listen(apiPort, () => {
  console.log(`API app listening at http://localhost:${apiPort}`)
})

pingApp.get('/ping', (req, res) => {
  console.log(`${Date.now()} pong ${req.query.iteration}`)
  res.send('pong')
})
  
pingApp.listen(myPingPort, () => {
console.log(`Ping app listening at http://localhost:${myPingPort}`)
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
    hostname: 'localhost',
    port: otherPingPort,
    secure:false,
    path: `/ping?iteration=${currentIteration}`,
    method: 'GET'
  }

  const req = https.request(options, callback);

  req.on('error', error => {
    console.error(error)
  })

  req.end();
}