exports.handler = (event, _context, callback) => {
    var payload = {};
    payload.event = event;
    payload.context = _context;

    callback(null,{
        statusCode: 200,
        body: JSON.stringify({ boop: true })
    })
};