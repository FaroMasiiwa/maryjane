/**
 * Imports
 */

const fs        = require('fs');
const path      = require('path');
const http      = require('http');



const PORT = 3000;

/**
 * Setting up server to handle requesres
 */


const server = http.createServer((req,res) => {
    const request = req.url
    switch(request){
        case '/' :
            // render homepage
        default:
            //render 404 page
    }


})





/**
 * Setting up the server to listen for requests.
 */
server.listen(PORT, () => {
    console.log(`Listening for server requests at http://localhost:${PORT}`)
})


