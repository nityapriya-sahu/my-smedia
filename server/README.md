# Backend Intallation process

    - npm init
    - npm i express
    - npm i mongoose
    - npm i body-parser
        - body-parser is a middleware. It checks our http request that comes from client side.
          It provide us with double check that a data & http request providing is valid to run on the server.
          So it protect our server before crashing
    -npm i nodemon

# Inside the packege.json file changes

"scripts": {
"start": "nodemon index.js"
},

"type": "module",
