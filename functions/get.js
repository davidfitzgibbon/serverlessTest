// const fetch = require('node-fetch')
exports.handler = async function(event, context) {
    const domains = [
    "https://node.server",
    "https://api.github.com"
    ];

    let path = event.path.replace("/api/get");

    var iterator = 0;
    for ( let i in queryStringParameters ) {
        path += !iterator ?  "?" : "&";
        path += `${i}=${queryStringParameters[i]}`;
        iterator++;
    }

    callback(null,{
        statusCode: 200,
        body: path
    })
//   try {
//     const response = await fetch('https://api.chucknorris.io/jokes/random')
//     if (!response.ok) {
//       // NOT res.status >= 200 && res.status < 300
//       return { statusCode: response.status, body: response.statusText }
//     }
//     const data = await response.json()

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ identity, user, msg: data.value })
//     }
//   } catch (err) {
//     console.log(err) // output to netlify function log
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
//     }
//   }




//   exports.handler = (event, _context, callback) => {
//     var urls = [
//         "https://node.server/",
//         "https://vf.server/"
//     ]
//     var payload = {};
//     payload.url = 

//     callback(null,{
//         statusCode: 200,
//         body: JSON.stringify(payload)
//     })
// };

}
