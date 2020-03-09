require('dotenv').config();
const fetch = require('./node_modules/node-fetch');
exports.handler = async function(event, context, callback) {
    // SETUP
    // domains we're going to check against, in order
    const domains = process.env.DOMAINS.split("||");
    
    // create the path that we're going to check
    let path = event.path.replace("/api/get", "");
    let iterator = 0;
    for ( let i in event.queryStringParameters ) {
        path += !iterator ?  "?" : "&";
        path += `${i}=${event.queryStringParameters[i]}`;
        iterator++;
    }

    // RUN
    // set where in the domains array we want to start
    let currentDomain = 0;
    async function getUrl() {
        let url = domains[currentDomain] + path;
        console.log(url)
        let hadError = false;
        let response = await fetch(url)
        .then(res=> res.json()) // if there's a response, return it
        .catch(error => { // else return the error
            hadError = true;
            return error;
        });

        // if there has been an error, dont return it, but try the next url
        currentDomain++;
        if ( (hadError || response.message === "Not Found") && currentDomain!==domains.length ) {
            return getUrl();
        }
        // else we have something, return it
        // this return the response or error,
        // if it's the last url we're looking though
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    }
    return getUrl();
}
