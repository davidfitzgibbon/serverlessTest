const fetch = require('./node_modules/node-fetch')
exports.handler = async function(event, context, callback) {
    // SETUP
    const domains = [
        "https://node.server",
        "https://api.github.com"
    ];

    let path = event.path.replace("/api/get", "");

    var iterator = 0;
    for ( let i in event.queryStringParameters ) {
        path += !iterator ?  "?" : "&";
        path += `${i}=${event.queryStringParameters[i]}`;
        iterator++;
    }

    // HELPER


    // RUN
    // for ( let domain of domains) {
        let variableName = `${domains[domains.length - 1]}/users/davidfitzgibbon/repos?type=owner&sort=updated`;
        console.log(variableName)
        let response = await fetch(variableName)
        .then(res=> res.json())
        .catch(error => console.error(error));

        return {
            statusCode: 200,
            body: JSON.stringify(response)
          };

    // }

    // callback(null,{
    //     statusCode: 200,
    //     body: path
    // })

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
